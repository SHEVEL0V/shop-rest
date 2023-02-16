/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3003/shop/",

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
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
