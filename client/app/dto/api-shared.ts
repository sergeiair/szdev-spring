
export interface ApiResponse<T> {
	data:  T
	status: boolean
	error: string
}

export interface TimeMemory {
	time: number
	memory: number
}

export interface LoaderResult<T> {
	result: T[] | T;
	params: any;
	status: 'success' | 'error' | 'notFound';
}

