import { setUserPrefrence } from '../reducers/userPrefrence';
import { postUserPrefrenceItemApi, getUserPrefrenceItemApi } from '../../api/userPrefrence';
import type { AppDispatch } from '../store';

interface UserPrefrencePayload {
  source_ids?: number[] | null;
  author_ids?: number[] | null;
  category_ids?: number[] | null;
}

export const postUserPrefrenceItemAction = (payload: UserPrefrencePayload) => (dispatch: AppDispatch) => {
    return postUserPrefrenceItemApi(payload)
            .then(response => {
                const { data } = response;
                dispatch(setUserPrefrence(data.user_prefrence));
                return response;
            });
};

export const getUserPrefrenceItemAction = () => (dispatch: AppDispatch) => {
    return getUserPrefrenceItemApi()
            .then(response => {
                const { data } = response;
                dispatch(setUserPrefrence(data.user_prefrence));
                return response;
            });
};
