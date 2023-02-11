/** @format */

import React, { useState } from "react";
import {
  useDeleteBasketMutation,
  useUpdateBasketMutation,
} from "../../services/fetch";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import s from "./style.module.css";

export default function CardBasket({ data, hendlePrice }) {
  const id = data._id;
  const { name, price, brand, img } = data.product;
  const [count, setCount] = useState(1);

  const [deleteProdukt, { isLoadDel }] = useDeleteBasketMutation();
  const [updateProdukt, { isLoadUp }] = useUpdateBasketMutation();

  const hendleCountProduct = (e) => {
    if (e === "-") {
      setCount((v) => (v === 1 ? 1 : v - 1));
    }
    if (e === "+") {
      setCount((v) => v + 1);
    }
    updateProdukt({ id, qty: count });
  };

  return (
    <div className={s.container}>
      <div className={s.flex}>
        <img className={s.img} src={img} alt="baner" />
        <div className={s.titleContainer}>
          <h2 className={s.title}>{name}</h2>
          <div className={s.countContainer}>
            <button
              className={s.button}
              onClick={() => hendleCountProduct("-")}
            >
              -
            </button>
            <b className={s.count}>{count}</b>
            <button
              className={s.button}
              onClick={() => hendleCountProduct("+")}
            >
              +
            </button>
            <b className={s.price}>{11111111} grn</b>
          </div>
        </div>
        <div></div>
        <Button
          sx={{ marginLeft: "auto", width: 200 }}
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={() => deleteProdukt(id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
