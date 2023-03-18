/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../services/fetch";
import Sidebar from "../sidebar";
import CardProduct from "../../components/cardProduct";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "../../components/pagination";
import useSearchParams from "../../hooks/useSearchParams";

import s from "./style.module.css";

export default function ListProducts() {
  const { params } = useSearchParams();
  const { token } = useSelector((store) => store.auth);
  const { data, isLoading } = useGetProductsQuery(params);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar options={data?.desc} isLoading={isLoading} />
      <div className={s.container}>
        <div className={s.containerListItem}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            data?.results?.map((el) => (
              <CardProduct key={el._id} data={el} token={token} />
            ))
          )}
        </div>
        {isLoading || <Pagination count={data?.count} />}
      </div>
    </div>
  );
}
