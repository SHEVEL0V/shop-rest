/** @format */

import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { useAddBasketMutation } from "../../services/fetch";

import s from "./style.module.css";

export default function CardProduct({ data }) {
  const { _id, name, price, rating, img, desc } = data;
  const [rat, setRat] = useState(rating);

  const [updatePost, { isLoading }] = useAddBasketMutation();

  return (
    <div className={s.container}>
      <img src={img} alt="logo" className={s.img} />
      <div>
        name: <span>{name}</span>
      </div>
      <div>
        <Rating
          name="simple-controlled"
          value={rat}
          onChange={(e, newValue) => setRat(newValue)}
        />
        <div className={s.prise}>
          price: <span>{price}</span> grn
        </div>

        <LoadingButton
          onClick={() => updatePost({ product: _id })}
          loading={isLoading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Add to basket</span>
        </LoadingButton>
      </div>

      <ul>
        <li>
          desc<span>{desc}</span>
        </li>
      </ul>
    </div>
  );
}
