import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ArticleAuthorState, ArticleAuthor } from '../../types';

const initialState: ArticleAuthorState = {
  articleAuthors: []
};

export const articleAuthorsSlice = createSlice({
  name: 'articleAuthor',
  initialState,
  reducers: {
    setArticleAuthors: (state, action: PayloadAction<ArticleAuthor[]>) => {
        state.articleAuthors = action.payload;
    }
  },
});

export const { setArticleAuthors } = articleAuthorsSlice.actions;

export default articleAuthorsSlice.reducer;
