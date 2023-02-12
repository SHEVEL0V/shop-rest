/** @format */

import Rating from "@mui/material/Rating";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { useAddBasketMutation } from "../../services/fetch";

import s from "./style.module.css";

export default function CardProduct({ data }) {
  const { _id, name, price, rating, img, desc } = data;
  const [rat, setRat] = useState(rating);

  const [addProduct, { isLoading }] = useAddBasketMutation();

  return (
    <div className={s.container}>
      <img src={img} alt="logo" className={s.img} />

      <h2>{name}</h2>
      <b className={s.flex}>
        Rating
        <Rating
          sx={{ marginBottom: 1, marginLeft: 1 }}
          value={rat}
          onChange={(e, newValue) => setRat(newValue)}
        />
      </b>

      <div className={s.flex}>
        <div className={s.prise}>
          price: <span>{price}</span> UAH
        </div>
        <LoadingButton
          onClick={() => addProduct({ product: _id, qty: 1 })}
          loading={isLoading}
          variant="contained"
          sx={{ marginLeft: "auto" }}
        >
          <span>Add to basket</span>
        </LoadingButton>
      </div>
    </div>
  );
}
