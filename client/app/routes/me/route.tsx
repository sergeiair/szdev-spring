import type { MetaFunction } from "@remix-run/node";
import PublicPageSkeleton from '~/components/skeletons/public/public-page-skeleton';
import React from 'react';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
	return [
		{title: "My CV. Recruitment purposes only"},
		{name: "description", content: "",},
		{name: "robots", content: "noindex",},
	];
};

export default function MyPage() {


	return (
		<PublicPageSkeleton>
			<div className={'p-4 py'}>
				<h1>Who am I</h1>


				<div className={' p-5 py'}>
					<div className={''}>
						I'm only human
					</div>
					<div className={'flex flex-gap-05 p-3 py'}>
						<div>
							<Link target={'_blank'} to={'/cv-file'} download>Get CV as .pdf</Link>
						</div>
						<div>or go to</div>
						<div>
							<Link target={'_blank'} to={'/cv'} reloadDocument>Quick view</Link>
						</div>
					</div>
				</div>
			</div>


		</PublicPageSkeleton>
	);
}
