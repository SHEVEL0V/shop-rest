/** @format */

import React from "react";
import {
  useAddBasketMutation,
  useGetProductsByIdQuery,
} from "../services/fetch";

import LoadingButton from "@mui/lab/LoadingButton";

import s from "./style.module.css";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  const { data } = useGetProductsByIdQuery(id);
  const { img, price, name, desc } = data || {};
  const [addProduct, { isLoading }] = useAddBasketMutation();

  return (
    isLoading || (
      <div className={s.container}>
        <img src={img} alt="logo" className={s.img} />

        <b>{name}</b>
        <p>{desc}</p>
        <div className={s.flex}>
          <div className={s.prise}>
            price: <span>{price}</span> UAH
          </div>
          <LoadingButton
            onClick={() => addProduct({ product: id, qty: 1 })}
            loading={isLoading}
            variant="contained"
            sx={{ marginLeft: "auto" }}
          >
            <span>Add to basket</span>
          </LoadingButton>
        </div>
      </div>
    )
  );
}
