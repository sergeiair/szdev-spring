import { create } from 'zustand'
import { BASE_REMIX_API_URL } from '~/config/constants';
import { AppHttp } from '~/http/app-http';


export const useSearchStore = create((set, get) => ({
	result: { tags: [], sr: [] },
	loading: false,
	loaded: false,
	search: async (searchString: string) => {
		get()?.clear();
		set({
			loading: true
		})

		const response = await AppHttp.post(`${BASE_REMIX_API_URL}/search`, { searchString })
		const json = await response.json()

		set({
			result: json?.data ?? { tags: [], sr: [] },
			loaded: true,
			loading: false
		})
	},
	clear: () => {
		set({
			result: { tags: [], sr: [] },
			loaded: false,
			loading: false
		})
	}

}))
