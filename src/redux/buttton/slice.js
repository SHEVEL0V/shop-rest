/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: true,
  basket: false,
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    setButtonMenu: (state) => {
      state.menu = !state.menu;
    },
    setButtonBasket: (state) => {
      state.basket = !state.basket;
    },
  },
});

export const { setButtonMenu, setButtonBasket } = buttonSlice.actions;

export default buttonSlice.reducer;
