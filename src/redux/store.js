/** @format */

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { shopApi } from "../services/fetch";
import button from "./button/slice";
import authSlice from "./auth/slice";
import basketSlice from "./basket/slice";

const auth = persistReducer({ key: "auth", storage }, authSlice);
const basket = persistReducer({ key: "basket", storage }, basketSlice);

export const store = configureStore({
  reducer: { auth, basket, button, [shopApi.reducerPath]: shopApi.reducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(shopApi.middleware),
});

export const persistor = persistStore(store);
