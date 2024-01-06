
export interface LoaderResult<T> {
	result: T[] | T;
	params: any;
	status: 'success' | 'error' | 'notFound';
}
