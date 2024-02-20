import React, { useEffect, useRef } from 'react';
import { ShortRead } from '~/dto/short-read';
import TagsList from '~/components/tags-list/tags-list';
import { DateUtils } from '~/utils/date';
import hljs from 'highlight.js';
import './short-read-full-item.css';


interface ShortReadItemProps {
	shortRead: ShortRead;
}

const ShortReadFullItem: React.FC<ShortReadItemProps> = ({ shortRead }) => {
	const bodyRef = useRef<HTMLDivElement>()

	if(!shortRead.created?.length) return <></>

	useEffect(() => {
		bodyRef.current?.querySelectorAll('pre').forEach((block) => {
			hljs.highlightBlock(block);
		});
	}, [bodyRef.current?.innerText]);

	return (
		<article className={'w-100 px sr-full'}>
			<h1>{shortRead.title}</h1>

			<div className={'p-3 py'}>
				<div ref={bodyRef}
					dangerouslySetInnerHTML={{__html: `${shortRead.content.toString()}`}}></div>
			</div>

			<div>
				<small className={'text-secondary'}>
					{DateUtils.getFormattedDate(shortRead.created)}
				</small>
			</div>

			<div className={'p-5 py'}>
				<TagsList items={shortRead.tags} />
			</div>
		</article>
	);
};

export default ShortReadFullItem;
