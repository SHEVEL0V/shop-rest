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
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    //===========PRODUCTS========================================================
    getProducts: builder.query({
      query: (params) => ({
        url: "products/",
        params,
      }),
      providesTags: ["Produkt"],
    }),
    //------------------------------------------------------------------------
    getProductsById: builder.query({
      query: (id) => ({
        url: `products/${id}`,
      }),
    }),
    //------------------------------------------------------------------------
    addProducts: builder.mutation({
      query: (body) => ({
        url: "products/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Produkt"],
    }),
    //------------------------------------------------------------------------
    deletedProducts: builder.mutation({
      query: (body) => ({
        url: "products/all",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Produkt"],
    }),
    //=========ORDER=================================================================
    getOrder: builder.query({
      query: (params) => ({ url: "order/", params }),
    }),
    //------------------------------------------------------------------------
    addOrder: builder.mutation({
      query: (body) => ({
        url: "order/",
        method: "POST",
        body,
      }),
    }),
    //------------------------------------------------------------------------
    // updateBasket: builder.mutation({
    //   query: ({ id, ...body }) => ({
    //     url: `basket/${id}`,
    //     method: "PUT",
    //     body,
    //   }),
    //   invalidatesTags: ["Basket"],
    // }),
    // //------------------------------------------------------------------------
    // deleteBasket: builder.mutation({
    //   query: (id) => ({
    //     url: `basket/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Basket"],
    // }),
    // //------------------------------------------------------------------------
    // deleteBasketAll: builder.mutation({
    //   query: (id) => ({
    //     url: `basket/all/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Basket"],
    // }),
    //======USER====================================================================
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
  useAddProductsMutation,
  useDeletedProductsMutation,
  useAddOrderMutation,
  useGetOrderQuery,
  useAddUserMutation,
  useLoginUserMutation,
} = shopApi;
