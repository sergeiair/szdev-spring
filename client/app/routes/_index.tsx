import type { MetaFunction } from "@remix-run/node";
import Top from '~/components/top/top';
import React, { useEffect } from 'react';
import { LoaderFunction } from '@remix-run/router';
import { BASE_API_URL, BASE_LOCAL_URL } from '~/config/constants';
import { useLoaderData } from '@remix-run/react';
import { TagItem } from '~/dto/tags';
import { baseLoader, basePostLoader } from '~/http/loaders/base-loader';
import { LoaderResult } from '~/dto/loader-result';
import TagsList from '~/components/tags-list/tags-list';
import SearchForm from '~/components/search-form/search-form';
import { useSearchStore } from '~/store/search/store';
import LastPosts from '~/components/last-posts/last-posts';

export const meta: MetaFunction = () => {
	return [
		{title: "New Remix App"},
		{name: "description", content: "Welcome to Remix!"},
	];
};

export const loader: LoaderFunction = async () => {
	const tags = await basePostLoader(`${BASE_LOCAL_URL}/tags`,  null,[]);
	const posts = await basePostLoader(`${BASE_LOCAL_URL}/last-quick-reads`,  null,[])

	return {
		tags, posts
	};
};

export default function Index() {
	const data: JsonifyObject<LoaderResult<TagItem>> = useLoaderData();

	return (
		<>
			<Top/>

			<section className={'container p-3 py'}>
				<div>
					<SearchForm/>
				</div>

				<div className={'grid'}>
					<div>
						<h1 className={'p-3 px'}>Recently posted</h1>

						<div className={'p-3 px'}>
							{<LastPosts items={data?.posts?.result ?? []}/>}
						</div>
					</div>

					<div className={'p-2 py'}>
						<h2 className={'p-3 px'}>Tags</h2>

						<div className={'p-3 px'}>
							{<TagsList items={data?.tags?.result ?? []}/>}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
