/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3003/shop/" }),
  tagTypes: ["Basket"],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (options) => ({
        url: "products/",
        params: options,
      }),
    }),
    getBasket: builder.query({
      query: () => "basket/",
      providesTags: ["Basket"],
    }),
    addBasket: builder.mutation({
      query: (body) => ({
        url: "basket/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Basket"],
    }),
    deleteBasket: builder.mutation({
      query: (id) => ({
        url: `basket/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Basket"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddBasketMutation,
  useGetBasketQuery,
  useDeleteBasketMutation,
} = shopApi;
