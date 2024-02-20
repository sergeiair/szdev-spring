import { json, LoaderFunctionArgs } from '@remix-run/router';
import { EReporter } from '~/exceptions/e-reporter';
import { HeadersFunction } from '@remix-run/node';
import { AppHttp } from '~/http/app-http';
import { BASE_LOCAL_API_URL } from '~/config/constants';
import { ApiResponse } from '~/dto/api-shared';
import { SortingResultData } from '~/dto/sorting-result';

export const headers: HeadersFunction = () => ({
	"Access-Control-Allow-Origin": "*"
});

export async function action({request}: LoaderFunctionArgs) {
	if (request.method !== 'POST') return new Response("Use POST", {
		status: 405,
	});

	const {name, array} = await request.json();

	if (!array?.length && !name) {
		return json(
			'Something is wrong here', {
				status: 400,
			},
		)
	}

	try {
		const response = await AppHttp.post(`${BASE_LOCAL_API_URL}/api/v1/playground/sort`, {
			name, array
		});
		const respJson = await response.json() as ApiResponse<SortingResultData>

		return json(respJson, {
				status: 200,
				headers: {
					"Access-Control-Allow-Origin": "*",
				},
			},
		)
	} catch (err) {
		// @ts-ignore
		EReporter.error(err?.message ?? (err?.toString() ?? ''), 'sortingPlayground')

		return json(
			err, {
				status: 500,
			},
		)
	}
}
