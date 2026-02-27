import { setArticleCategories } from '../reducers/articleCategory';
import { getArticleCategoriesCollectionApi } from '../../api/articleCategory';
import type { AppDispatch } from '../store';

export const fetchArticleCategoriesAction = () => (dispatch: AppDispatch) => {
    return getArticleCategoriesCollectionApi()
            .then(response => {
                const { data } = response;
                dispatch(setArticleCategories(data.article_categories));
                return response;
            });
};
