/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: true,
};

export const buttonSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setButtonMenu: (state) => {
      state.menu = !state.menu;
    },
  },
});

export const { setButtonMenu } = buttonSlice.actions;

export default buttonSlice.reducer;
