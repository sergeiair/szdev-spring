import './public-page-skeleton.css';
import Top from '~/components/top/top';
import React, { ReactElement } from 'react';
import Footer from '~/components/footer/footer';

type PublicPageSkeletonProps = {
	children: ReactElement
}

export default function PublicPageSkeleton({children}: PublicPageSkeletonProps) {
	return (
		<div>
			<Top/>

			<section className={'container '}>
				<div className={'public-page'}>
					{children}
				</div>
			</section>

			<Footer />
		</div>
	);
}
