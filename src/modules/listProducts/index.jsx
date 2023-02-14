/** @format */

import React from "react";
import { useGetProductsQuery } from "../../services/fetch";

import CardProduct from "../../components/cardProduct";
import CircularProgress from "@mui/material/CircularProgress";

import s from "./style.module.css";
import useSearchParamsCastome from "../../hooks/useSearchParams";

export default function ListProducts() {
  const { params } = useSearchParamsCastome();

  const { data = [], isLoading } = useGetProductsQuery({ ...params });

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
