/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
  open: false,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    renderInfo: (state, { payload }) => {
      state.message = payload;
      state.open = !state.open;
    },
  },
});

export const { renderInfo } = infoSlice.actions;

export default infoSlice.reducer;
