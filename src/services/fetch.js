/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3003/shop/" }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (options) => ({
        url: "products/",
        params: options,
      }),
    }),
    getBasket: builder.query({
      query: () => "basket/",
    }),
    addBasket: builder.mutation({
      query: (body) => ({
        url: "basket/",
        method: "POST",
        body,
      }),
    }),
    deleteBasket: builder.mutation({
      query: (id) => ({
        url: `basket/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddBasketMutation,
  useGetBasketQuery,
  useDeleteBasketMutation,
} = shopApi;
