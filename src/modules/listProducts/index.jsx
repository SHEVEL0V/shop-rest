/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../services/fetch";
import CardProduct from "../../components/cardProduct";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "../../components/pagination";
import useSearchParamsCustom from "../../hooks/useSearchParams";

import s from "./style.module.css";

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
      {isLoading || <Pagination count={data?.count} />}
    </div>
  );
}
