/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: [0, 30000],
  options: {},
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setOptions: (state, { payload }) => {
      for (const key in payload) {
        if (payload[key] === null) {
          state.options = delete state.options.key;
        } else {
          state.options = { ...state.options, ...payload };
        }
      }
    },

    setPrice: (state, { payload }) => {
      state.price = payload;
    },
  },
});

export const { setOptions, setPrice } = filterSlice.actions;

export default filterSlice.reducer;
