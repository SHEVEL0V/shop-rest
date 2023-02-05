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
  }),
});

export const { useGetProductsQuery } = shopApi;
