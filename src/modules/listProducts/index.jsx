/** @format */

import React from "react";
import { useGetProductsQuery } from "../../services/fetch";

import CardProduct from "../../components/cardProduct";
import CircularProgress from "@mui/material/CircularProgress";

import s from "./style.module.css";
import useSearchParamsCustom from "../../hooks/useSearchParams";
import { useSelector } from "react-redux";
import PaginationItem from "../../components/pagination";

export default function ListProducts() {
  const { params } = useSearchParamsCustom();
  const { token } = useSelector((store) => store.auth);
  const { data, isLoading } = useGetProductsQuery(params);

  return (
    <div>
      <div className={s.container}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          data?.products?.map((el) => (
            <CardProduct key={el._id} data={el} token={token} />
          ))
        )}
      </div>
      <PaginationItem count={data?.count} />
    </div>
  );
}
