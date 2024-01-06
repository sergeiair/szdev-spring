
export class AppHttp {
	
	public static async get(url: string, options?: any): Promise<Response> {
		return AppHttp.withHandledResponse(
			await AppHttp.request('GET', url, options)
		);
	}

	public static async post(url: string, options?: any): Promise<Response> {
		return AppHttp.withHandledResponse(
			await AppHttp.request('POST', url, options)
		);
	}

	public static async put(url: string, options?: any): Promise<Response> {
		return AppHttp.withHandledResponse(
			await AppHttp.request('PUT', url, options)
		);
	}

	public static async delete(url: string, options?: any): Promise<Response> {
		return AppHttp.withHandledResponse(
			await AppHttp.request('DELETE', url, options)
		);
	}

	public static async request(method: string, url: string, data?: any): Promise<Response> {
		return await fetch(
			url, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			method: method,
			body: !!data && typeof data === 'object' ? JSON.stringify(data) : null
		});
	}

	private static withHandledResponse(response: Response): Response{
		return response;
	}
}
