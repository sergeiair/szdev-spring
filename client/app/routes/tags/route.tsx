import { json, LoaderFunctionArgs } from '@remix-run/router';
import { singleton } from '~/utils/singleton.server';
import { DataCache, DataCacheKeys } from '~/cache/data-cache';


export async function action({request}: LoaderFunctionArgs) {
	if (request.method !== 'POST') return new Response("Use POST", {
		status: 405,
	});

	try {
		const service = singleton<DataCache>('dataCache', () => new DataCache());

		return json({
			data: service.get(DataCacheKeys.tags) ?? []
		}, {
			status: 200,
		})
	} catch (err: any) {
		return json(
			err, {
				status: 500,
			},
		)
	}
}
