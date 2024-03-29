import { json, LoaderFunctionArgs } from '@remix-run/router';
import { singleton } from '~/utils/singleton.server';
import { DataCache, DataCacheKeys } from '~/cache/data-cache';
import { kmpSearch } from '~/utils/3rd/kmpSearch';
import { EReporter } from '~/exceptions/e-reporter';
import { HeadersFunction } from '@remix-run/node';

export const headers: HeadersFunction = () => ({
	"Access-Control-Allow-Origin": "*"
});

export async function action({request}: LoaderFunctionArgs) {
	if (request.method !== 'POST') return new Response("Use POST", {
		status: 405,
	});

	const service = singleton<DataCache>('dataCache', () => new DataCache());
	const {searchString} = await request.json();
	const results = {
		tags: [],
		sr: []
	}

	if (!searchString) {
		return json(
			'No search string', {
				status: 400,
			},
		)
	}

	try {
		const cleanSearchString = searchString?.trim()?.toLowerCase();
		const srData = service.get(DataCacheKeys.posts) ?? [];
		const tagsData = service.get(DataCacheKeys.tags) ?? [];

		results.tags = tagsData.filter((sr: { content: string }) =>
			kmpSearch(cleanSearchString, sr.content) >= 0)

		results.sr = srData.filter((sr: { title: string, content: string, urlAlias: string }) =>
			kmpSearch(cleanSearchString, sr.title) >= 0 ||
			kmpSearch(cleanSearchString, sr.content) >= 0)

		return json({
				data: results
			}, {
				status: 200,
				headers: {
					"Access-Control-Allow-Origin": "*",
				},
			},
		)
	} catch (err) {
		// @ts-ignore
		EReporter.error(err?.message ?? (err?.toString() ?? ''), 'kmpSearch')

		return json(
			err, {
				status: 500,
			},
		)
	}
}
