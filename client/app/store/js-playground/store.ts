import { create } from 'zustand'
import { getRandomNumberFromRange, omit } from '~/utils/store';
import { HeapItem, JsPlaygroundStore, PlaygroundItem } from '~/store/js-playground/dto';

export const useJsPlaygroundStore = create((set, get) => ({
	progress: '',
	heap: {},
	syncFNs: {},
	timeoutFNs: {},
	promises: {},
	clicks: {},
	fetchMethods: {},
	counter: {
		syncFNs: 0,
		clicks: 0,
		promises: 0,
		timeoutFNs: 0,
		fetchMethods: 0,
		awaitingFetchMethods: 0
	},
	syncFNsTimeouts: [],
	fetchTimeouts: [],
	awaitingFetchMethods: [],
	console: [],
	getSortedMicrotasks: () => {
		return [
			...Object.values((get()!.promises ?? {})) as PlaygroundItem[],
			...Object.values((get()!.fetchMethods ?? {})) as PlaygroundItem[],
		].sort((a: PlaygroundItem, b: PlaygroundItem) => (a.added ?? 0) - (b.added ?? 0));
	},
	isStackEmpty: (): boolean => !Object.values(((get() as JsPlaygroundStore).syncFNs ?? {}))
		.find(item => item?.running),
	findInHeap: (position: number): HeapItem | undefined => {
		return Object.values((get()!.heap ?? {}))
			.find((item) => item?.position === position) as HeapItem | undefined
	},
	getUpdatedCounter: (name: string) => {
		const value = (get()?.counter[name] ?? 0) + 1;

		set({
			counter: {
				...(get()?.counter ?? {}),
				[name]: value,
			}
		})

		return value;
	},
	addClick:
		() => {
			if (get()?.isStackEmpty()) {
				const firstClick = Object.values((get()!.clicks ?? {}))[0]

				get()?.addSyncFn(`First click handler`);
			} else {
				const name = `Click handler ${get()?.getUpdatedCounter('clicks')}`;

				set({
					heap: {
						...(get()!.heap ?? {}),
						[name]: {
							name: name,
							status: 'stored',
							position: getRandomNumberFromRange(0, 47),
							gap: getRandomNumberFromRange(0, 10)
						},
					},
					clicks: {
						...(get()!.clicks ?? {}),
						[name]: {
							name: name,
							running: true,
						},
					},
					console: [
						`Add ${name} to callback queue`,
						...(get()!.console ?? []),
					]
				})
			}
		},
	addPromise:
		() => {
			if (get()?.isStackEmpty()) {
				const firstPromise = Object.values((get()!.promises ?? {}))[0]

				get()?.addSyncFn(`Call stack frame from first resolved Promise`);
			} else {
				const name = `Promise ${get()?.getUpdatedCounter('promises')}`;

				set({
					promises: {
						...(get()!.promises ?? {}),
						[name]: {
							name: name,
							running: true,
							added: new Date().valueOf()
						},
					},
					console: [
						`Add ${name} to microtask queue`,
						...(get()!.console ?? []),
					]
				})
			}
		},
	addTimeoutFn:
		() => {
			if (get()?.isStackEmpty()) {
				const firstTimeout = Object.values((get()!.timeoutFNs ?? {}))[0]

				get()?.addSyncFn(`Call stack frame from First timeout fn`)
			} else {
				const name = `Timeout ${get()?.getUpdatedCounter('timeoutFNs')}`;

				set({
					timeoutFNs: {
						...(get()!.timeoutFNs ?? {}),
						[name]: {
							name: name,
							running: true,
							delay: null
						},
					},
					console: [
						`Add ${name} to callback queue`,
						...(get()!.console ?? []),
					]
				})
			}
		},
	addSyncFn:
		(fnName: string | undefined = undefined) => {
			const name = fnName ?? `Call stack frame ${get()?.getUpdatedCounter('syncFNs')}`;
			let callDelay = 0;

			set({
				heap: {
					...(get()!.heap ?? {}),
					[name]: {
						name: name,
						status: 'stored',
						position: getRandomNumberFromRange(0, 47),
						gap: getRandomNumberFromRange(0, 10)
					},
				},
				syncFNs: {
					[name]: {
						name: name,
						running: true,
						delay: getRandomNumberFromRange(2000, 3000)
					},
					...(get()!.syncFNs ?? {})
				},
				console: [
					`Add ${name} to call stack`,
					...(get()!.console ?? [])
				]
			})

			get()?.syncFNsTimeouts.forEach((timer: any) => clearTimeout(timer))

			Object.values((get()!.syncFNs ?? {})).forEach(fn => {
				callDelay += (fn?.delay ?? 0)

				get()?.syncFNsTimeouts.push(
					setTimeout(
						() => get()?.stopRunningSync(fn?.name),
						callDelay
					)
				)
			})
		},

	addFetch:
		(fnName: string | undefined = undefined) => {
			const name = fnName ?? `Fetch ${get()?.getUpdatedCounter('awaitingFetchMethods')}`;
			let resolvedToStackDelay = 0;

			set({
				awaitingFetchMethods: {
					[name]: {
						name: name,
						running: true,
						delay: getRandomNumberFromRange(1000, 2000)
					},
					...(get()!.awaitingFetchMethods ?? {})
				},
				console: [
					`Sent ${name}`,
					...(get()!.console ?? [])
				]
			})

			get()?.fetchTimeouts.forEach((timer: any) => clearTimeout(timer))

			Object.values((get()!.awaitingFetchMethods ?? {})).forEach(fn => {
				const nameWithCallback = `${fn!.name} callback`

				get()?.fetchTimeouts.push(
					setTimeout(
						() => {
							set({
								fetchMethods: {
									[nameWithCallback]: {
										name: nameWithCallback,
										running: true,
										added: new Date().valueOf()
									},
									...(get()!.fetchMethods ?? {})
								},
								awaitingFetchMethods: omit(fn!.name, {
									...(get()!.awaitingFetchMethods ?? {})
								}),
								console: [
									`Added ${nameWithCallback} to microtask queue`,
									...(get()!.console ?? [])
								]
							});

							Object.values((get()!.fetchMethods ?? {})).forEach(fn => {
								resolvedToStackDelay += 1000

								setTimeout(() => {
									get()?.checkIfFetchCanBeMovedToStack();
								}, resolvedToStackDelay)

							});
						},
						fn?.delay
					)
				)
			})


		},

	stopRunningSync:
		(name: string) => {
			set({
				syncFNs: omit(name, {
					...(get()!.syncFNs ?? {})
				}),
				heap: {
					...(get()!.heap ?? {}),
					[name]: {
						...(get()!.heap ?? {})[name],
						status: 'marked',
					},
				},
				console:
					[
						`Finished running ${name}`,
						...(get()!.console ?? [])
					]
			})

			get()?.checkIfClickCanBeMovedToStack();
			get()?.checkIfMicrotaskCanBeMovedToStack();
			get()?.checkIfTimeoutCanBeMovedToStack();
		},
	checkIfFetchCanBeMovedToStack:
		() => {
			const promiseQueueIsEmpty = !Object.values((get()!.promises ?? {})).length
			const fetchQueueIsNotEmpty = !!Object.values((get()!.fetchMethods ?? {})).length

			if (get()?.isStackEmpty() && fetchQueueIsNotEmpty && promiseQueueIsEmpty) {
				const firstFetchHandler = Object.values((get()!.fetchMethods ?? {}))[0]

				set({
					fetchMethods: omit(firstFetchHandler?.name, {
						...(get()!.fetchMethods ?? {})
					}),
				})

				get()?.addSyncFn(`Call stack frame from ${firstFetchHandler?.name}`)
			}
		},
	checkIfClickCanBeMovedToStack:
		() => {
			const clicksQueueIsNotEmpty = !!Object.values((get()!.clicks ?? {})).length

			if (get()?.isStackEmpty() && clicksQueueIsNotEmpty) {
				const firstClickHandler = Object.values((get()!.clicks ?? {}))[0]

				set({
					clicks: omit(firstClickHandler?.name, {
						...(get()!.clicks ?? {})
					}),
				})

				get()?.addSyncFn(`Call stack frame from ${firstClickHandler?.name}`)
			}
		},
	checkIfTimeoutCanBeMovedToStack:
		() => {
			const timeoutQueueIsNotEmpty = !!Object.values((get()!.timeoutFNs ?? {})).length

			if (get()?.isStackEmpty() && timeoutQueueIsNotEmpty) {
				const firstTimeout = Object.values((get()!.timeoutFNs ?? {}))[0]

				set({
					timeoutFNs: omit(firstTimeout?.name, {
						...(get()!.timeoutFNs ?? {})
					}),
				})

				get()?.addSyncFn(`Call stack frame from ${firstTimeout?.name}`)
			}
		},
	checkIfMicrotaskCanBeMovedToStack:
		() => {
			const firstMicrotask = get()?.getSortedMicrotasks()[0];

			if (get()?.isStackEmpty() && !!firstMicrotask?.name) {
				set({
					promises: omit(firstMicrotask?.name, {
						...(get()!.promises ?? {})
					}),
					fetchMethods: omit(firstMicrotask?.name, {
						...(get()!.fetchMethods ?? {})
					}),
				})

				get()?.addSyncFn(`Call stack frame from ${firstMicrotask?.name}`)
			}
		},
	checkIfHeapCleanNeeded:
		() => {
			set({
				heap: Object.values(get()?.heap ?? {}).reduce((acc: any, curr: any) => {
					if (curr.status !== 'marked') {
						acc = {
							...acc,
							[curr.name]: curr
						} as {
							[key: string]: HeapItem
						};
					}

					return acc;
				}, {})
			})
		}
}))



