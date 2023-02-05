/** @format */

import React from "react";

import { useGetProductsQuery } from "../../services/fetch";
// import fetchPoducts from "../../services/fetch";
import CardProduct from "../../components/cardProduct";
import CircularProgress from "@mui/material/CircularProgress";
import s from "./style.module.css";

export default function ListProducts() {
  const { data = [], isLoading } = useGetProductsQuery();

  return (
    <div className={s.container}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        data.map((el) => <CardProduct key={el._id} data={el} />)
      )}
    </div>
  );
}
