import apiClient from './client/client';

interface ArticleSearchParams {
  search_string?: string;
  source_ids?: string;
  author_ids?: string;
  category_ids?: string;
  published_date?: string;
}

export const getArticleCollectionApi = async () => {
    const client = await apiClient();
    return client.get('/articles-by-categories');
};

export const getArticlesBySearchCollectionApi = async (params: ArticleSearchParams) => {
    const client = await apiClient();
    return client.get('/articles-search', { params });
};
