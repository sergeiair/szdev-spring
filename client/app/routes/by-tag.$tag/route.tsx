import type { MetaFunction } from "@remix-run/node";
import Top from '~/components/top/top';
import { useEffect } from 'react';
import { LoaderFunction } from '@remix-run/router';
import { useLoaderData } from '@remix-run/react';
import { BASE_API_URL } from '~/config/constants';
import { LoaderResult } from '~/dto/loader-result';
import { ShortRead } from '~/dto/short-read';
import ShortReadList from '~/components/articles/short-read-list/short-read-list';
import { baseLoader } from '~/http/loaders/base-loader';

export const meta: MetaFunction = ({params}) => {
	return [{title: `Quick read posts for tag: ${Object.values(params).join(', ')}`}];
};

export const loader: LoaderFunction = async ({params}) => {
	return baseLoader(`${BASE_API_URL}/api/v1/articles/by-tag/${params.tag?.toLowerCase()}`, params, []);
};

export default function ByTag() {
	const data: JsonifyObject<LoaderResult<ShortRead>> = useLoaderData();

	return (
		<>
			<Top/>

			<section className={'container p-3 py'}>
				<div className={'p-3 px'}>
					<h1>Quick read posts with <strong className={'text-primary'}>
						{data?.params?.tag}</strong> tag
					</h1>
				</div>

				<ShortReadList shortReads={data?.result ?? []}/>
			</section>
		</>
	);
}
