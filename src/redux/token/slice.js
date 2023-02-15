/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
  },
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
