/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: [1000, 20000],
  options: {},
};

export const counterSlice = createSlice({
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

export const { setOptions, setPrice } = counterSlice.actions;

export default counterSlice.reducer;
