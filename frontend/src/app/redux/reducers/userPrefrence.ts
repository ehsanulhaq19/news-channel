import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserPrefrenceState, UserPrefrence } from '../../types';

const initialState: UserPrefrenceState = {
  userPrefrence: {}
};

export const userPrefrenceSlice = createSlice({
  name: 'userPrefrence',
  initialState,
  reducers: {
    setUserPrefrence: (state, action: PayloadAction<UserPrefrence>) => {
        state.userPrefrence = action.payload;
    }
  },
});

export const { setUserPrefrence } = userPrefrenceSlice.actions;

export default userPrefrenceSlice.reducer;
