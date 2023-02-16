/** @format */

import React from "react";
import {
  useDeleteBasketMutation,
  useUpdateBasketMutation,
} from "../../services/fetch";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import s from "./style.module.css";

export default function CardBasket({ data, hendlePrice }) {
  const { _id: id, qty } = data;
  const { name, price, img } = data.product;

  const finalPrice = qty * price;

  const [deleteProdukt] = useDeleteBasketMutation();
  const [updateProdukt] = useUpdateBasketMutation();

  const hendleCountDecrement = () =>
    qty === 1 ? null : updateProdukt({ id, qty: qty - 1 });

  const hendleCountIncrement = () => updateProdukt({ id, qty: qty + 1 });

  const hendleDeleteProdukt = () => deleteProdukt(id);

  return (
    <div className={s.container}>
      <div className={s.flex}>
        <img className={s.img} src={img} alt="baner" />
        <div className={s.titleContainer}>
          <h2 className={s.title}>{name}</h2>
          <div className={s.countContainer}>
            <button className={s.button} onClick={hendleCountDecrement}>
              -
            </button>
            <b className={s.count}>{qty}</b>
            <button className={s.button} onClick={hendleCountIncrement}>
              +
            </button>
            <b className={s.price}>{finalPrice} grn</b>
          </div>
        </div>
        <div></div>
        <Button
          sx={{ marginLeft: "auto", width: 200 }}
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={hendleDeleteProdukt}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
