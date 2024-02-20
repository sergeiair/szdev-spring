
export interface PlaygroundItem {
	name: string,
	running: boolean,
	added?: number,
	delay?: number,
}

export interface HeapItem {
	status: string,
	position: number,
	gap: number
}

export interface JsPlaygroundStore {
	heap: {
		[key: string]: HeapItem
	},
	counter: {
		syncFNs: number,
		clicks: number,
		promises: number,
		timeoutFNs: number,
		fetchMethods: number,
		awaitingFetchMethods: number
	},
	syncFNs: {
		[key: string]: PlaygroundItem
	},
	timeoutFNs: {
		[key: string]: PlaygroundItem
	},
	promises: {
		[key: string]: PlaygroundItem
	},
	clicks: {
		[key: string]: PlaygroundItem
	},
	syncFNsTimeouts: any[],
	fetchTimeouts: any[],
	getSortedMicrotasks: Function,
	fetchMethods: {
		[key: string]: PlaygroundItem
	},
	awaitingFetchMethods: {
		[key: string]: PlaygroundItem
	},
	console: string[],
	addSyncFn: Function,
	addTimeoutFn: Function,
	addPromise: Function,
	addSyncFnFromTimeout: Function,
	addClick: Function,
	addFetch: Function,
	findInHeap: Function,
	checkIfHeapCleanNeeded: Function
}
