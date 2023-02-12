/** @format */

import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useGetProductsQuery } from "../../services/fetch";

import CardProduct from "../../components/cardProduct";
import CircularProgress from "@mui/material/CircularProgress";

import s from "./style.module.css";
import useSearchParamsCastome from "../../hooks/useSearchParams";

export default function ListProducts() {
  const { price, options } = useSelector((state) => state.filter);

  const { params } = useSearchParamsCastome();

  const {
    data = [],
    isLoading,
    refetch,
  } = useGetProductsQuery({
    ...params,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

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
