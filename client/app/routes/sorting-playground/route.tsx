import type { MetaFunction } from "@remix-run/node";
import PublicPageSkeleton from '~/components/skeletons/public/public-page-skeleton';
import React, { useState } from 'react';
import TagsList from '~/components/tags-list/tags-list';
import { AppHttp } from '~/http/app-http';
import { BASE_REMIX_API_URL } from '~/config/constants';
import { generateArray } from '~/utils/arrays';
import { ApiResponse } from '~/dto/api-shared';
import { SortingResultData } from '~/dto/sorting-result';
import { LineChart } from '~/components/line-chart/line-chart';

export const meta: MetaFunction = () => {
	return [
		{title: "Sorting algorithms playground"},
		{
			name: "description",
			content: "Bubble sort, Bucket sort, Counting sort, Cube sort, Heap sort, Insertion sort, Merge sort, Quick sort, Radix sort, Selection sort, Shell sort, Tim sort, Tree sort,",
		},
	];
};

export default function SortingPlayground() {
	const sortingKeys = ['Bubble', 'Bucket', 'Counting', 'Cube',
		'Heap', 'Insertion', 'Merge', 'Quick', 'Radix', 'Selection',
		'Shell', 'Tim', 'Tree'];

	const [loading, setLoading] = useState(false);
	const [arrayLength, setArrayLength] = useState(10000);
	const [sortingName, setSortingName] = useState(sortingKeys[5]);
	const [sortingResultData, setSortingResultData] = useState<any[]>([])

	const doSort = () => {
		setLoading(true);
		const array = generateArray(arrayLength);

		setTimeout(async () => {
			const response = await AppHttp.post(`${BASE_REMIX_API_URL}/sorting-action`,
				{
					name: sortingName?.toLowerCase(),
					array
				}
			)
			const json = await response.json() as ApiResponse<SortingResultData>


			if (json?.data?.result) {
				setSortingResultData([
					...(sortingResultData ?? []),
					{
						...json.data,
						initialArray: array
					}
				])
			}

			setLoading(false)
		}, 1000)
	}

	return (
		<PublicPageSkeleton>
			<div className={'p-4 py'}>
				<h1>Let's compare 13 sorting algorithms</h1>

				<div className={'sticky-top p-3 flex-center-auto  flex-gap-1 flex-wrap'}>
					<div className={'flex-center-auto flex-gap-05 '}>
						<div
							style={{minWidth: 130}}
							className={'text-secondary text-smaller'}>
							Pick an algorithm
						</div>
						<div className={'text-smaller'}>
							<select
								defaultValue={sortingName}
								className={'mb-0'}
								style={{width: '180px'}}
								onChange={(e) => setSortingName(e.target.value)}>
								{
									sortingKeys.map((key) => (
										<option
											defaultValue={sortingName}
											value={key}
											key={key}>{key} sort
										</option>
									))
								}
							</select>
						</div>
					</div>

					<div className={'p-3 px'}></div>

					<div className={'p-3 py'}>
						<div className={'flex-center-auto  flex-gap-05 '}>
							<div
								style={{minWidth: 130}}
								className={'text-secondary text-smaller'}>
								Set an array length <br/> (max 30000)
							</div>
							<div className={'text-smaller'}>
								<input
									defaultValue={arrayLength}
									className={'mb-0'}
									style={{width: '180px'}}
									type={'number'}
									min={1000}
									max={30000}
									step={100}
									onChange={(e) =>
										setArrayLength(parseInt(e.target.value, 10))}
								/>
							</div>
						</div>
					</div>

					<div className={'p-3 px'}></div>

					{
						loading ? <button
							disabled={true}
							className={'mb-0'}
							style={{width: '200px',}}>
							Please wait...
						</button> : <button
							className={'mb-0'}
							style={{width: '200px'}}
							onClick={() => doSort()}>
							Try
						</button>
					}
				</div>

				{
					sortingResultData.length ? <div className={'p-5 py'}>
						<h2 className={'p-3 px'}>Results</h2>

						<table>
							<thead>
							<tr>
								<th>Name</th>
								<th>Time (ms)</th>
								<th>Memory (bytes)</th>
								<th>Initial array</th>
								<th>Sorted array</th>
							</tr>
							</thead>
							<tbody>
							{
								sortingResultData.map((item: SortingResultData, index) => (
									<tr key={`${item.name}-${index}`}>
										<td>{item.name.toLocaleUpperCase()}</td>
										<td>{item.result.time}</td>
										<td>{Math.abs(item.result.memory)}</td>
										<td>
											<LineChart
												array={item.initialArray.slice(0, 50)}
												color={'#d32232'} width={150} height={80}/>
										</td>
										<td>
											<LineChart
												array={item.array.slice(0, 50)}
												color={'#2b8015'} width={150} height={80}/>
										</td>
									</tr>
								))
							}
							</tbody>
						</table>
					</div> : <></>
				}

				<div className='p-4 py'>
					<h2 className={'p-3 px'}>Time complexity & memory consumption reference</h2>


					<table className={'text-smaller'}>
						<thead>
						<tr>
							<th><span className={'text-secondary text-smaller'}>Name</span></th>
							<th><span className={'text-secondary text-smaller'}>Best time complexity</span></th>
							<th><span className={'text-secondary text-smaller'}>Average time complexity</span></th>
							<th><span className={'text-secondary text-smaller'}>Worst time complexity</span></th>
							<th><span className={'text-secondary text-smaller'}>Space</span></th>
						</tr>
						</thead>

						<tbody>
						<tr>
							<td><span>Quicksort</span></td>
							<td><span>Ω(n log(n))</span></td>
							<td><span>Θ(n log(n))</span></td>
							<td><span>O(n^2)</span></td>
							<td><span>O(log(n))</span></td>
						</tr>
						<tr>
							<td><span>Mergesort</span></td>
							<td><span>Ω(n log(n))</span></td>
							<td><span>Θ(n log(n))</span></td>
							<td><span>O(n log(n))</span></td>
							<td><span>O(n)</span></td>
						</tr>
						<tr>
							<td><span>Timsort</span></td>
							<td><span>Ω(n)</span></td>
							<td><span>Θ(n log(n))</span></td>
							<td><span>O(n log(n))</span></td>
							<td><span>O(n)</span></td>
						</tr>
						<tr>
							<td><span>Heapsort</span></td>
							<td><span>Ω(n log(n))</span></td>
							<td><span>Θ(n log(n))</span></td>
							<td><span>O(n log(n))</span></td>
							<td><span>O(1)</span></td>
						</tr>
						<tr>
							<td><span>Bubble Sort</span></td>
							<td><span>Ω(n)</span></td>
							<td><span>Θ(n^2)</span></td>
							<td><span>O(n^2)</span></td>
							<td><span>O(1)</span></td>
						</tr>
						<tr>
							<td><span>Insertion Sort</span></td>
							<td><span>Ω(n)</span></td>
							<td><span>Θ(n^2)</span></td>
							<td><span>O(n^2)</span></td>
							<td><span>O(1)</span></td>
						</tr>
						<tr>
							<td><span>Selection Sort</span></td>
							<td><span>Ω(n^2)</span></td>
							<td><span>Θ(n^2)</span></td>
							<td><span>O(n^2)</span></td>
							<td><span>O(1)</span></td>
						</tr>
						<tr>
							<td><span>Tree Sort</span></td>
							<td><span>Ω(n log(n))</span></td>
							<td><span>Θ(n log(n))</span></td>
							<td><span>O(n^2)</span></td>
							<td><span>O(n)</span></td>
						</tr>
						<tr>
							<td><span>Shell Sort</span></td>
							<td><span>Ω(n log(n))</span></td>
							<td><span>Θ(n(log(n))^2)</span></td>
							<td><span>O(n(log(n))^2)</span></td>
							<td><span>O(1)</span></td>
						</tr>
						<tr>
							<td><span>Bucket Sort</span></td>
							<td><span>Ω(n+k)</span></td>
							<td><span>Θ(n+k)</span></td>
							<td><span>O(n^2)</span></td>
							<td><span>O(n)</span></td>
						</tr>
						<tr>
							<td><span>Radix Sort</span></td>
							<td><span>Ω(nk)</span></td>
							<td><span>Θ(nk)</span></td>
							<td><span>O(nk)</span></td>
							<td><span>O(n+k)</span></td>
						</tr>
						<tr>
							<td><span>Counting Sort</span></td>
							<td><span>Ω(n+k)</span></td>
							<td><span>Θ(n+k)</span></td>
							<td><span>O(n+k)</span></td>
							<td><span>O(k)</span></td>
						</tr>
						<tr>
							<td><span>Cubesort</span></td>
							<td><span>Ω(n)</span></td>
							<td><span>Θ(n log(n))</span></td>
							<td><span>O(n log(n))</span></td>
							<td><span>O(n)</span></td>
						</tr>
						</tbody>


					</table>


					<div className={'p-3'}>
						<p className={' text-secondary'}>
							<strong>Big Omega (Ω)</strong> represents a notation that describes the lower bound of the growth rate of
							a function
						</p>

						<p className={'mb-3 text-secondary'}>
							<strong>Big O</strong> means that the speed at which an algorithm grows is either slower or equal to a
							particular value.
						</p>

						<p className={'text-secondary'}>
							<strong>Big-Theta (Θ) </strong> notation describes a tight bound on the growth rate of a function (No
							matter how big the input is, function will always grow between these bounds.)
						</p>
					</div>
				</div>

				<div className={'mb-3 p-3 px'}>
					<TagsList items={[{content: 'Java', id: 1}, {content: 'Algorithms', id: 2}]}/>
				</div>
			</div>


		</PublicPageSkeleton>
	);
}
