/** @format */

import { configureStore } from "@reduxjs/toolkit";

import { shopApi } from "../services/fetch";
import button from "./buttton/slice";
import token from "./token/slice";

export const store = configureStore({
  reducer: { token, button, [shopApi.reducerPath]: shopApi.reducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});
