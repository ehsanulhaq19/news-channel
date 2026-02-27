import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ArticleSourceState, ArticleSource } from '../../types';

const initialState: ArticleSourceState = {
  articleSources: []
};

export const articleSourcesSlice = createSlice({
  name: 'articleSource',
  initialState,
  reducers: {
    setArticleSources: (state, action: PayloadAction<ArticleSource[]>) => {
        state.articleSources = action.payload;
    }
  },
});

export const { setArticleSources } = articleSourcesSlice.actions;

export default articleSourcesSlice.reducer;
