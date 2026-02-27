import apiClient from './client/client';

interface UserPrefrencePayload {
  source_ids?: number[] | null;
  author_ids?: number[] | null;
  category_ids?: number[] | null;
}

export const postUserPrefrenceItemApi = async (payload: UserPrefrencePayload) => {
    const { source_ids = null, author_ids = null, category_ids = null } = payload;
    const client = await apiClient();

    return client.post('/user-prefrences', {
        ...(source_ids && { source_ids }),
        ...(author_ids && { author_ids }),
        ...(category_ids && { category_ids })
    });
};

export const getUserPrefrenceItemApi = async () => {
    const client = await apiClient();
    return client.get('/user-prefrences');
};
