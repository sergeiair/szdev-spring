import { TagItem } from '~/dto/tags';

export interface ShortRead {
	id: number | null,
	title: string,
	content: string,
	preview: string,
	created: number[],
	published: boolean,
	urlAlias: string,
	tags: TagItem[]
}

export interface ShortReadCached {
	title: string,
	urlalias: string,
	content: string,
}
