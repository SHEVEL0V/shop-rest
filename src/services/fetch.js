/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3003/shop/" }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (req) => ({
        url: "products/",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = shopApi;
