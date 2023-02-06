/** @format */

import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useGetProductsQuery } from "../../services/fetch";

import CardProduct from "../../components/cardProduct";
import CircularProgress from "@mui/material/CircularProgress";

import s from "./style.module.css";

export default function ListProducts() {
  const { price, options } = useSelector((state) => state.filter);
  const page = 1;

  const { data, isLoading, refetch } = useGetProductsQuery({
    ...options,
    min: price[0],
    max: price[1],
    page,
  });

  useEffect(() => {
    refetch();
  }, [refetch, price, options]);

  return (
    <div className={s.container}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        data.products.map((el) => <CardProduct key={el._id} data={el} />)
      )}
    </div>
  );
}
