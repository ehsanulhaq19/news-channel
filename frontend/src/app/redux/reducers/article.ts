import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ArticleState, ArticlesMap } from '../../types';

const initialState: ArticleState = {
  articles: {}
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<ArticlesMap>) => {
        state.articles = action.payload;
    }
  },
});

export const { setArticles } = articleSlice.actions;

export default articleSlice.reducer;
