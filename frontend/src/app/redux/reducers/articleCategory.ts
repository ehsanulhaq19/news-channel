import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ArticleCategoryState, ArticleCategory } from '../../types';

const initialState: ArticleCategoryState = {
  articleCategories: []
};

export const articleCategoriesSlice = createSlice({
  name: 'articleCategory',
  initialState,
  reducers: {
    setArticleCategories: (state, action: PayloadAction<ArticleCategory[]>) => {
        state.articleCategories = action.payload;
    }
  },
});

export const { setArticleCategories } = articleCategoriesSlice.actions;

export default articleCategoriesSlice.reducer;
