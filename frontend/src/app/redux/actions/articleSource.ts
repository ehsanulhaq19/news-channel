import { setArticleSources } from '../reducers/articleSource';
import { getArticleSourcesCollectionApi } from '../../api/articleSource';
import type { AppDispatch } from '../store';

export const fetchArticleSourcesAction = () => (dispatch: AppDispatch) => {
    return getArticleSourcesCollectionApi()
            .then(response => {
                const { data } = response;
                dispatch(setArticleSources(data.article_sources));
                return response;
            });
};
