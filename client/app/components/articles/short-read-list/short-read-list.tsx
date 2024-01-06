import React from 'react';
import { ShortRead } from '~/dto/short-read';
import ShortReadListItem from '~/components/articles/short-read-list-item/short-read-list-item';


interface ShortReadListProps {
	shortReads: ShortRead[];
}

const ShortReadList: React.FC<ShortReadListProps> = ({ shortReads }) => {
	return (
		<>
			{shortReads.map((shortRead) => (
				<ShortReadListItem key={shortRead.id} shortRead={shortRead} />
			))}
		</>
	);
};

export default ShortReadList;
