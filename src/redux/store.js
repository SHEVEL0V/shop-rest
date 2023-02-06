/** @format */

import { configureStore } from "@reduxjs/toolkit";

import { shopApi } from "../services/fetch";
import button from "./buttton/slice";
import filter from "./filter/slice";

export const store = configureStore({
  reducer: { filter, button, [shopApi.reducerPath]: shopApi.reducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});
