import React from 'react';
import { ShortRead } from '~/dto/short-read';
import { Link } from '@remix-run/react';
import TagsList from '~/components/tags-list/tags-list';

interface ShortReadItemProps {
	shortRead: ShortRead;
}

const ShortReadListItem: React.FC<ShortReadItemProps> = ({ shortRead }) => {
	return (
		<article>
			<Link to={`/quick-read/${shortRead.urlAlias}`}>
				<h2>{shortRead.title}</h2>
			</Link>

			<div className={'p-3 py'}>
				{shortRead.preview}
			</div>

			<TagsList items={shortRead.tags ?? []}/>
		</article>
	);
};

export default ShortReadListItem;
