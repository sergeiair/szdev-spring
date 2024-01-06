import fs from 'fs';
import process from 'process';

export enum DataCacheKeys {
	tags =	'tags',
	posts = 'posts'
}

export class DataCache {

	#cache = new Map<string, any>();
	#intitalized = false;

	public initOnce(): void {
		if (!this.#intitalized) {
			this.#intitalized = true;

			this.loadFiles();
			this.initReload();
		}
	}

	public get(fileName: string): any {
		return this.#cache.get(fileName);
	}

	private initReload(): void {
		setInterval(() => {
			this.loadFiles();
		}, 1000 * 60 * 10)
	}

	private loadFiles(): void {
		this.loadFile(DataCacheKeys.tags);
		this.loadFile(DataCacheKeys.posts);
	}

	private loadFile(fileName: string): void {
		// @ts-ignore
		fs.readFile(`${process.cwd()}/app/jsonCache/${fileName}.json`,
			{encoding: 'utf8'},
			(err: NodeJS.ErrnoException | null, data: Buffer) => {
				this.set(fileName, data);
			});
	}

	private set(fileName: string, data: Buffer) {
		try {
			this.#cache.set(fileName, JSON.parse(data.toString().toLowerCase()));
			console.log(`loaded ${fileName}`)
		} catch (e: any) {
			console.error(e.message);
		}
	}
}
