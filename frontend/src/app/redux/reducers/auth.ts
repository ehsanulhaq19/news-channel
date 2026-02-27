import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User, AuthState } from '../../types';

const initialState: AuthState = {
  token: null,
  user: {}
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
        state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
        state.token = action.payload;
        if (action.payload) {
          localStorage.setItem('token', action.payload);
        }
    },
    logout: (state) => {
      state.token = null;
      state.user = {};
      localStorage.removeItem('token');
    }
  },
});

export const { setUser, setToken, logout } = authSlice.actions;

export default authSlice.reducer;
