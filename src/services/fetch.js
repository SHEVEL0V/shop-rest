/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhbHVAY29tLnVhIiwiaWF0IjoxNjc2Mzg0NjczfQ.db5kTU0qf2GLW22IYWZcLnUOg-llr3S1mCBtklSgB5o";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3003/shop/",

    prepareHeaders: (headers) =>
      headers.set("authorization", `Bearer ${token}`),
  }),
  tagTypes: ["Basket"],

  endpoints: (builder) => ({
    //------------------------------------------------------------------------
    getProducts: builder.query({
      query: (params) => ({
        url: "products/",
        params,
      }),
    }),
    //------------------------------------------------------------------------
    getProductsById: builder.query({
      query: (id) => ({
        url: `products/${id}`,
      }),
    }),

    //==========================================================================
    getBasket: builder.query({
      query: (params) => ({ url: "basket/", params }),
      providesTags: ["Basket"],
    }),
    //------------------------------------------------------------------------
    addBasket: builder.mutation({
      query: (body) => ({
        url: "basket/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Basket"],
    }),
    //------------------------------------------------------------------------
    updateBasket: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `basket/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Basket"],
    }),
    //------------------------------------------------------------------------
    deleteBasket: builder.mutation({
      query: (id) => ({
        url: `basket/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Basket"],
    }),
    //==========================================================================
    deleteBasketAll: builder.mutation({
      query: (id) => ({
        url: `basket/all/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Basket"],
    }),
    //==========================================================================
    addUser: builder.mutation({
      query: (body) => ({
        url: "user/auth",
        method: "POST",
        body,
      }),
    }),
    //------------------------------------------------------------------------
    loginUser: builder.mutation({
      query: (body) => ({
        url: "user/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useAddBasketMutation,
  useUpdateBasketMutation,
  useGetBasketQuery,
  useDeleteBasketMutation,
  useDeleteBasketAllMutation,
  useAddUserMutation,
  useLoginUserMutation,
} = shopApi;
