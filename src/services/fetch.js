/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Product", "Order", "Rating"],
  endpoints: (builder) => ({
    //===========PRODUCTS========================================================
    getProducts: builder.query({
      query: (params) => ({
        url: "products/",
        params,
      }),
      providesTags: ["Product", "Rating"],
    }),
    //------------------------------------------------------------------------
    getProductsById: builder.query({
      query: (id) => `products/${id}`,
    }),
    //------------------------------------------------------------------------
    getProductsDesc: builder.query({
      query: () => "products/desc",
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
      query: ({ id, body }) => ({
        url: `products/${id}`,
        method: "PUT",
        body,
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
    //=========RATING=================================================================
    addRating: builder.mutation({
      query: (body) => ({
        url: "rating/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Rating"],
    }),
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
    //------------------------------------------------------------------------
    loginGoogle: builder.mutation({
      query: (body) => ({
        url: "user/login/google",
        method: "POST",
        body,
      }),
    }),
    //------------------------------------------------------------------------
    updateUser: builder.mutation({
      query: (body) => ({
        url: "user/update",
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsDescQuery,
  useGetProductsByIdQuery,
  useAddProductsMutation,
  useUpdateProductsMutation,
  useDeletedProductsMutation,
  useAddOrderMutation,
  useGetOrderQuery,
  useUpdateOrderMutation,
  useAddRatingMutation,
  useAddUserMutation,
  useLoginUserMutation,
  useLoginGoogleMutation,
  useUpdateUserMutation,
} = shopApi;
