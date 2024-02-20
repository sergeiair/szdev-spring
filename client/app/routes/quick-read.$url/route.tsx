import type { MetaFunction } from "@remix-run/node";
import Top from '~/components/top/top';
import { useEffect } from 'react';
import { LoaderFunction } from '@remix-run/router';
import { useLoaderData } from '@remix-run/react';
import { BASE_LOCAL_API_URL } from '~/config/constants';
import { ShortRead } from '~/dto/short-read';
import { baseLoader } from '~/http/loaders/base-loader';
import ShortReadFullItem from '~/components/articles/short-read-full-item/short-read-full-item';
import PublicPageSkeleton from '~/components/skeletons/public/public-page-skeleton';
import { LoaderResult } from '~/dto/api-shared';

export const meta: MetaFunction = ({ params, data }) => {
  return [{ title: `${data?.result?.title}` }];
};

export const loader: LoaderFunction = async ({params}) => {
  return baseLoader(`${BASE_LOCAL_API_URL}/api/v1/articles/search/${params.url}`,  params,{});
};

export default function QuickRead() {
  const data: JsonifyObject<LoaderResult<ShortRead>> = useLoaderData();

  return (
    <PublicPageSkeleton>
      <div className={'flex-center-center flex-column'}>
        {
          data.status === 'notFound' ? <div className={'p-4 flex-center-center'}>
            <h1>Oops...404</h1>
          </div> : <></>
        }

        <ShortReadFullItem shortRead={data.result}/>
      </div>
    </PublicPageSkeleton>
  );
}
