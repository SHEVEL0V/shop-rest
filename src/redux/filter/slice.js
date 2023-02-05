/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: null,
  brand: null,
  price: [1000, 20000],
};

export const counterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setType: (state, { payload }) => {
      state.type = payload;
    },
    setBrand: (state, { payload }) => {
      state.brand = payload;
    },
    setPrice: (state, { payload }) => {
      state.price = payload;
    },
  },
});

export const { setType, setBrand, setPrice } = counterSlice.actions;

export default counterSlice.reducer;
