/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../services/fetch";
import Sidebar from "../sidebar";
import CardProduct from "../../components/cardProduct";
import useSearchParams from "../../hooks/useSearchParams";

import s from "./style.module.css";
import ListContainer from "../../components/listContainer";

export default function ListProducts() {
  const { params } = useSearchParams();
  const { token } = useSelector((store) => store.auth);
  const { data, isLoading } = useGetProductsQuery(params);

  return (
    <div className={s.container}>
      <Sidebar options={data?.desc} />
      <ListContainer count={data?.count} isLoading={isLoading}>
        <div className={s.containerProducts}>
          {data?.results?.map((el) => (
            <CardProduct key={el._id} data={el} token={token} />
          ))}
        </div>
      </ListContainer>
    </div>
  );
}
