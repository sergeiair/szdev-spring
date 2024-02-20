import React, { useEffect, useState } from 'react';
import './search-form.css';
import { useDebounce } from '~/hooks/debounce';
import { useSearchStore } from '~/store/search/store';
import { TagItem } from '~/dto/tags';
import { ShortRead, ShortReadCached } from '~/dto/short-read';
import { Link } from '@remix-run/react';

interface SearchFormProps {
}

const SearchForm: React.FC<SearchFormProps> = ({}) => {
	const [searchString, setSearchString] = useState('');
	const searchStore = useSearchStore();

	const submit = useDebounce(() => {
		if ((searchString?.length ?? 0) >= 3) {
			searchStore?.search(searchString);
		}
	}, 300);


	useEffect( () => () => searchStore?.clear(), [] );

	return (
		<>
			<form
				method={'POST'}
				onSubmit={e => {
					e.preventDefault();
					submit();
				}}>

				<div className={'p-2 search-form'}>
					<div className={'flex-center-center flex-gap-1 '}>
						<input
							className={'search-field flex-3'}
							type="search"
							minLength={3}
							placeholder="Type something here"
							onChange={e =>
								setSearchString(e.target.value)}
							required/>

						<button
							className={'flex-1'}
							type="submit">
							Search
						</button>
					</div>

					{
						searchStore?.loading ?
							<small aria-busy="true"
								className={'p-3 flex-center-center search-results-nothing'}>
									Searching ...
							</small> : <></>
					}

					{
						(!searchStore?.result?.tags?.length && !searchStore?.result?.sr?.length) && searchStore?.loaded ?
							<small className={'p-3 flex-center-center search-results-nothing'}
								onClick={searchStore?.clear}>
									Nothing found :(
							</small> : <></>
					}

					{
						(searchStore?.result?.tags?.length || searchStore?.result?.sr?.length) && searchStore?.loaded ?
							<div className={'p-3 search-results'}>
								{
									[
										(searchStore?.result?.tags ?? []).map((tag:  TagItem, i: number) => (
											<div key={`tag-${i}-${tag.id}`}>
												<Link
													className={'p-1 py search-results-item '}
													to={`/by-tag/${tag.content}`}
													prefetch="intent">
														<small>Tag: {tag.content}</small>
												</Link>
											</div>
										)),
										(searchStore?.result?.sr ?? []).map((sr: ShortReadCached, i: number) => (
											<div key={`sr-${i}-${sr.urlAlias}`}>
												<Link
													className={'p-1 py search-results-item'}
													to={`/quick-read/${sr.urlalias}`}
													prefetch="intent">
														<small >Post: {sr.title}</small>
												</Link>
											</div>
										))
									]
								}
							</div> : <></>
					}
				</div>
			</form>
		</>
	)
		;
};

export default SearchForm;
