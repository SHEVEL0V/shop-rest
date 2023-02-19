/** @format */

import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import s from "./style.module.css";
import { useDispatch } from "react-redux";
import {
  removeBasketEl,
  decrementsQty,
  incrementsQty,
} from "../../redux/basket/slice";

export default function CardBasket({ data, hendlePrice }) {
  const dispatch = useDispatch();

  const { _id, name, price, img, qty } = data;

  const finalPrice = qty * price;

  const hendleCountDecrement = () => dispatch(decrementsQty(_id));
  const hendleCountIncrement = () => dispatch(incrementsQty(_id));
  const hendleDeleteProdukt = () => dispatch(removeBasketEl(data));

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
