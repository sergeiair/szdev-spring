import React from 'react';
import './tags-list.css';
import { TagItem } from '~/dto/tags';
import { Link } from '@remix-run/react';

interface TagsListProps {
	items: TagItem[];
}

const TagsList: React.FC<TagsListProps> = ({items,}) => {
	return (
		<>
			<ul className={'p-3 py flex-center flex-wrap flex-gap-05 tags-items '}>
				{items.map((tag, index) => (
					<li
						key={tag.id}
						className={'tag-item-wrap'}>
						<Link
							className={'tag-item'}
							to={`/by-tag/${tag.content.toLowerCase()}`}
							prefetch="intent">
								{tag.content.charAt(0).toUpperCase() + tag.content.slice(1)}
						</Link>
					</li>
				))}
			</ul>
		</>
	)
		;
};

export default TagsList;
