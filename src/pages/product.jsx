/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetProductsByIdQuery } from "../services/fetch";
import { setBasket } from "../redux/basket/slice";
import useItemByBasket from "../hooks/useItemByBasket";

import LoadingButton from "@mui/lab/LoadingButton";

import s from "./style.module.css";

export default function Product() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductsByIdQuery(id);

  const dispatch = useDispatch();
  const { isDisable } = useItemByBasket(id);

  const { img, price, name, desc } = data || {};

  const hendeleAddProducts = () => dispatch(setBasket(data));

  return isLoading ? (
    <div>loading</div>
  ) : (
    <div className={s.container}>
      <img src={img} alt="logo" className={s.img} />

      <b>{name}</b>
      <p>{desc}</p>
      <div className={s.flex}>
        <div className={s.prise}>
          price: <span>{price}</span> UAH
        </div>
        <LoadingButton
          onClick={hendeleAddProducts}
          variant="contained"
          disabled={isDisable()}
          sx={{ marginLeft: "auto" }}
        >
          <span>Add to basket</span>
        </LoadingButton>
      </div>
    </div>
  );
}
