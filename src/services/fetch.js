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
      query: (options) => ({
        url: "products/",
        params: options,
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
      query: () => "basket/",
      providesTags: ["Basket"],
    }),
    //------------------------------------------------------------------------
    addBasket: builder.mutation({
      query: (body) => ({
        url: "basket/",
        method: "POST",
        headers: {
          auth: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuQG1haWwuY29tIiwiaWF0IjoxNjc2MzIzNDk1fQ.almZPJ2Nl79ssqKaDaCrfo7J2YVb0hPgPtA6LTIGtTQ",
        },
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
  useAddUserMutation,
  useLoginUserMutation,
} = shopApi;
