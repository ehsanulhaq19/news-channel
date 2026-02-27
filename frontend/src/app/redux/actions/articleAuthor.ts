import { setArticleAuthors } from '../reducers/articleAuthor';
import { getArticleAuthorsCollectionApi } from '../../api/articleAuthor';
import type { AppDispatch } from '../store';

export const fetchArticleAuthorsAction = () => (dispatch: AppDispatch) => {
    return getArticleAuthorsCollectionApi()
            .then(response => {
                const { data } = response;
                dispatch(setArticleAuthors(data.article_authors));
                return response;
            });
};
