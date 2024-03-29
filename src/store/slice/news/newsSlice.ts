import { createSlice } from '@reduxjs/toolkit'

import { INewsState } from '@/interfaces/news.interface/news.interface'
import { IWatchlistState } from '@/interfaces/watchlist.interface/watchlist.interface'
import { getNews } from '@/store/thunks/newsThink/newsThunk'
import {
	createWatchlistThunk,
	getAllWatchlistThunk
} from '@/store/thunks/watchlistThunk/watchlistThunk'

const initialState: INewsState = {
	news: [],
	isLoading: false
}

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getNews.fulfilled, (state: INewsState, action) => {
			state.news = action.payload
			state.isLoading = false
		})
	}
})

export default newsSlice.reducer
