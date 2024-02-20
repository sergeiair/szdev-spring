import type { MetaFunction } from "@remix-run/node";
import PublicPageSkeleton from '~/components/skeletons/public/public-page-skeleton';
import './js-client-engine-playground.css'
import React, { useEffect } from 'react';
import { useJsPlaygroundStore } from '~/store/js-playground/store';
import { JsPlaygroundStore, PlaygroundItem } from '~/store/js-playground/dto';
import { getRandomNumberFromRange } from '~/utils/store';

export const meta: MetaFunction = () => {
	return [
		{title: "JavaScript engine playground"},
		{
			name: "description",
			content: "Interactive JS browser runtime engine playground. Simulate how javascript works",
		},
	];
};

export default function JSClientEnginePlaygroundPage() {
	// @ts-ignore
	const jsPlaygroundStore: JsPlaygroundStore = useJsPlaygroundStore()

	useEffect(() => {
		setInterval(() => {
			jsPlaygroundStore.checkIfHeapCleanNeeded()
		}, 7000)
	}, []);

	return (
		<PublicPageSkeleton>
			<div>
				<h1>How JavaScript works in browser (simulation)</h1>
				<div>The running time of commands is between 2 and 3 seconds for better visualization</div>

				<div className={'p-5 py flex-center flex-gap-1 flex-1'}>
					<div>
						<button onClick={() => {
							jsPlaygroundStore?.addSyncFn()
						}}>+ Synchronous fn
						</button>
						<button onClick={() => {
							jsPlaygroundStore?.addTimeoutFn()
						}}>+ Timeout fn
						</button>
						<button onClick={() => {
							jsPlaygroundStore?.addPromise()
						}}>+ Promise
						</button>
						<button onClick={() => {
							jsPlaygroundStore?.addClick()
						}}>+ Click
						</button>
						<button onClick={() => {
							jsPlaygroundStore?.addFetch()
						}}>+ Fetch
						</button>


					</div>
					<div className={'p-5 px grid flex-2 flex-gap-1'}>
						<div className={'flex-column flex-center-center'}>
							<h5 className={'mb-2'}>Call stack (LIFO)</h5>
							<div className={'flex-column flex-center ghost-card call-stack-card'}>
								{
									Object.values(jsPlaygroundStore.syncFNs)
										.filter((syncFn) => syncFn.running)
										.map((syncFn, index) =>
											<div className={'w-100 fn-card'} key={index}>
												{syncFn.name}
											</div>)
								}
							</div>
						</div>
						<div className={'flex-column flex-center-center flex-gap-1'}>
							<div className={'flex-column flex-center-center'}>
								<h5 className={'mb-2'}>API</h5>
								<div className={'flex flex-center-center ghost-card flex-gap-05 api-card'}>
									<span
										className={' fn-card'}>Timers ({Object.values(jsPlaygroundStore.timeoutFNs ?? {}).length})
									</span>

									<span className={' fn-card'}>
										Networking
										({Object.values(jsPlaygroundStore.awaitingFetchMethods ?? {}).length})
									</span>
								</div>
							</div>

							<div className={'p-1 py'}></div>

							<div className={'flex-column flex-center-center'}>
								<h5 className={'mb-2'}> Callback Queue (FIFO)</h5>
								<div className={'flex-column flex-center ghost-card queue-card'}>
									{
										Object.values(jsPlaygroundStore.clicks)
											.filter((clickFn) => clickFn.running)
											.map((clickFn, index) =>
												<div className={'w-100 fn-card'} key={index}>
													{clickFn.name}
												</div>)
									}
									{
										Object.values(jsPlaygroundStore.timeoutFNs)
											.filter((timeoutFn) => timeoutFn.running)
											.map((timeoutFn, index) =>
												<div className={'w-100 fn-card'} key={index}>
													{timeoutFn.name}
												</div>)
									}
								</div>
							</div>

							<div className={'p-1 py'}></div>

							<div className={'flex-column flex-center-center'}>
								<h5 className={'mb-2'}>Microtask Queue (FIFO)</h5>
								<div className={'flex-column flex-center ghost-card queue-card'}>
									{
										jsPlaygroundStore.getSortedMicrotasks().map((item: PlaygroundItem, index: number) =>
											<div className={'w-100 fn-card'} key={`${index}-${item.added}`}>
												{item.name}
											</div>
										)
									}
								</div>
							</div>
						</div>
						<div className={'flex-column flex-center-center'}>
							<h5 className={'mb-0'}>Heap</h5>
							<div><small>Mark & Sweep GC</small></div>
							<div className={'card heap-card'}>
								{
									[...new Array(48)].map((_, index) => {
										const heapItem = jsPlaygroundStore.findInHeap(index);

										if (!!heapItem) {
											return <div key={index}
												style={{padding: `${heapItem.gap}px`}}>
													<div className={`heap-card-item-${heapItem.status}`}></div>
											</div>
										} else {
											return <div key={index}></div>
										}
									})
								}
							</div>
						</div>
					</div>
				</div>

				<div className={'text-secondary text-smaller'}>
					<div>
						(i) Click handler will execute before a promise callback if the click happened and queued before the promise
						is resolved.
					</div>

					<div>
						(i) The callback associated with the fetch promise processed based on its addition order, it doesn't wait
						for all other microtasks before being dequeued.
					</div>

					<div>
						(i) A click handler will have higher priority in dequeuing than a timeout
					</div>
				</div>

				<div className={'flex-center-center flex-gap-1 w-100 p-5 py'}>
					<div>Console</div>

					<div className={'w-100 ghost-card text-smaller'}>
						{
							jsPlaygroundStore.console.map((command, index) =>
								<div key={index}>
									{command}
								</div>)
						}
					</div>
				</div>

			</div>
		</PublicPageSkeleton>
	);
}
