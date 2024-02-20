import { AppHttp } from '~/http/app-http';
import { EReporter } from '~/exceptions/e-reporter';

export const baseLoader = async (url: string, params: any, defaultValue: any[] | object = [],) => {
	const fetchData = await AppHttp.get(url);

	if (fetchData.status !== 200) {
		EReporter.maybeReportErrorFor5xx(fetchData.status, fetchData.statusText, url)

		return {
			result: defaultValue,
			status: fetchData.status === 404 ? 'notFound' : 'error',
			params
		};
	} else {
		const response = await fetchData.json();

		return {
			result: response?.data ?? defaultValue,
			status: 'success',
			params
		};
	}
};

export const basePostLoader = async (url: string, params: any, defaultValue: any[] | object = [],) => {
	const fetchData = await AppHttp.post(url);

	if (fetchData.status !== 200) {
		EReporter.maybeReportErrorFor5xx(fetchData.status, fetchData.statusText, url)

		return {
			result: defaultValue,
			status: fetchData.status === 404 ? 'notFound' : 'error',
			params
		};
	} else {
		const response = await fetchData.json();

		return {
			result: response?.data ?? defaultValue,
			status: 'success',
			params
		};
	}
};
