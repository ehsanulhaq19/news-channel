import { setArticles } from '../reducers/article';
import { getArticleCollectionApi } from '../../api/article';
import type { ArticlesMap } from '../../types';
import type { AppDispatch } from '../store';

export const fetchArticlesAction = () => (dispatch: AppDispatch) => {
    return getArticleCollectionApi()
            .then(response => {
                const { data } = response;
                dispatch(setArticles(data.articles));
                return response;
            });
};

export const setArticlesAction = (articles: ArticlesMap) => (dispatch: AppDispatch) => {
    dispatch(setArticles(articles));
};
