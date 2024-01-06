import React from 'react';
import './last-posts.css';

import { Link } from '@remix-run/react';
import { ShortReadCached } from '~/dto/short-read';

interface LastPostsProps {
	items: ShortReadCached[];
}

const LastPosts: React.FC<LastPostsProps> = ({items,}) => {
	return (
		<div className={'last-posts-wrap'}>
			<ul className={'p-3 px'}>
				{items.map((item, index) => (
					<li
						key={`${index}-${item.urlalias?.slice(0, 5)}`}>
							<h3 className={''}>
								<Link
									className={' last-posts-item'}
									to={`/quick-read/${item.urlalias}`}
									prefetch="intent">
										{item.title.charAt(0).toUpperCase() + item.title.slice(1)}
								</Link>
							</h3>
					</li>
				))}
			</ul>
		</div>
	)
		;
};

export default LastPosts;
