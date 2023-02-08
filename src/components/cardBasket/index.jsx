/** @format */

import React from "react";
import { useDeleteBasketMutation } from "../../services/fetch";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import s from "./style.module.css";

export default function CardBasket({ data }) {
  const id = data._id;
  const { name, price, brand, img } = data.product;

  const [deleteProdukt, { isLoading }] = useDeleteBasketMutation();
  return (
    <div className={s.className}>
      <h2>{name}</h2> <b>{brand}</b>
      <img className={s.img} src={img} alt="baner" />
      <p>{price}</p>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => deleteProdukt(id)}
      >
        Delete
      </Button>
    </div>
  );
}
