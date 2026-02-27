import { setUser, setToken, logout } from '../reducers/auth';
import type { User } from '../../types';
import type { AppDispatch } from '../store';

export const setUserAction = (user: User) => (dispatch: AppDispatch) => {
    dispatch(setUser(user));
};

export const setTokenAction = (token: string | null) => (dispatch: AppDispatch) => {
    dispatch(setToken(token));
};

export const logoutAuthSession = () => (dispatch: AppDispatch) => {
    dispatch(logout());
};
