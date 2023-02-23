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
  tagTypes: ["Product", "Order"],
  endpoints: (builder) => ({
    //===========PRODUCTS========================================================
    getProducts: builder.query({
      query: (params) => ({
        url: "products/",
        params,
      }),
      providesTags: ["Product"],
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
      invalidatesTags: ["Product"],
    }),
    //------------------------------------------------------------------------
    updateProducts: builder.mutation({
      query: ({ id, data }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    //------------------------------------------------------------------------

    deletedProducts: builder.mutation({
      query: (body) => ({
        url: "products/all",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    //=========ORDER=================================================================
    getOrder: builder.query({
      query: (params) => ({ url: "order/", params }),
      providesTags: ["Order"],
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
    updateOrder: builder.mutation({
      query: (body) => ({
        url: "order/",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Order"],
    }),
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
  useUpdateProductsMutation,
  useDeletedProductsMutation,
  useAddOrderMutation,
  useGetOrderQuery,
  useUpdateOrderMutation,
  useAddUserMutation,
  useLoginUserMutation,
} = shopApi;
