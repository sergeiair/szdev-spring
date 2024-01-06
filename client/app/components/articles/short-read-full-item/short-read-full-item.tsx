import React from 'react';
import { ShortRead } from '~/dto/short-read';
import TagsList from '~/components/tags-list/tags-list';
import { DateUtils } from '~/utils/date';

interface ShortReadItemProps {
	shortRead: ShortRead;
}

const ShortReadFullItem: React.FC<ShortReadItemProps> = ({ shortRead }) => {
	if(!shortRead.created?.length) return <></>

	return (
		<article className={'w-100 px'}>
			<h1>{shortRead.title}</h1>

			<div className={'p-3 py'}>
				<div dangerouslySetInnerHTML={{__html: shortRead.content}}></div>
			</div>

			<div>
				{DateUtils.getFormattedDate(shortRead.created)}
			</div>

			<div className={'p-5 py'}>
				<TagsList items={shortRead.tags} />
			</div>
		</article>
	);
};

export default ShortReadFullItem;
