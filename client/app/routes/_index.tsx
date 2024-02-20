import type { MetaFunction } from "@remix-run/node";
import React from 'react';
import { LoaderFunction } from '@remix-run/router';
import { BASE_LOCAL_URL } from '~/config/constants';
import { Link, useLoaderData } from '@remix-run/react';
import { TagItem } from '~/dto/tags';
import { basePostLoader } from '~/http/loaders/base-loader';
import TagsList from '~/components/tags-list/tags-list';
import SearchForm from '~/components/search-form/search-form';
import LastPosts from '~/components/last-posts/last-posts';
import PublicPageSkeleton from "~/components/skeletons/public/public-page-skeleton";
import { LoaderResult } from '~/dto/api-shared';

export const meta: MetaFunction = () => {
	return [
		{title: "Welcome to SZDev"},
		{name: "description", content: "Quick-read software development articles."},
	];
};

export const loader: LoaderFunction = async () => {
	const tags = await basePostLoader(`${BASE_LOCAL_URL}/tags`, null, []);
	const posts = await basePostLoader(`${BASE_LOCAL_URL}/last-quick-reads`, null, [])

	return {
		tags, posts
	};
};

export default function Index() {
	const data: JsonifyObject<LoaderResult<TagItem>> = useLoaderData();

	return (
		<PublicPageSkeleton>
			<>
				<SearchForm/>

				<div>
					<div className={'grid'}>
						<div>
							<h1 className={'p-2 px'}>Recently posted</h1>

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

					<div className={'p-3 py'}></div>

					<div className={'card'}>
						<h2 className={'mb-3 '}>Playground:</h2>

						<div className={'mt-3'}>
							<div>
								<Link to={`/sorting-playground`}>
									13 sorting algorithms
								</Link>
							</div>
							<div className={'p-1 py'}></div>
							<div>
								<Link to={`/js-client-engine-playground`}>
									JS browser runtime playground
								</Link>
							</div>
						</div>
					</div>
				</div>
			</>
		</PublicPageSkeleton>
	);
}
