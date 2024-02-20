import type { MetaFunction } from "@remix-run/node";
import { LoaderFunction } from '@remix-run/router';
import { useLoaderData } from '@remix-run/react';
import { BASE_LOCAL_API_URL } from '~/config/constants';
import { ShortRead } from '~/dto/short-read';
import ShortReadList from '~/components/articles/short-read-list/short-read-list';
import { baseLoader } from '~/http/loaders/base-loader';
import React from 'react';
import PublicPageSkeleton from '~/components/skeletons/public/public-page-skeleton';
import { LoaderResult } from '~/dto/api-shared';

export const meta: MetaFunction = ({params}) => {
	return [{title: `Quick read posts for tag: ${Object.values(params).join(', ')}`}];
};

export const loader: LoaderFunction = async ({params}) => {
	return baseLoader(`${BASE_LOCAL_API_URL}/api/v1/articles/by-tag/${params.tag?.toLowerCase()}`, params, []);
};

export default function ByTag() {
	const data: JsonifyObject<LoaderResult<ShortRead>> = useLoaderData();

	return (
		<PublicPageSkeleton>
			<>
				<div className={'p-3 px'}>
					<h1>Quick read posts with <strong className={'text-primary'}>
						{data?.params?.tag}</strong> tag
					</h1>
				</div>

				<ShortReadList shortReads={data?.result ?? []}/>
			</>
		</PublicPageSkeleton>
	);
}
