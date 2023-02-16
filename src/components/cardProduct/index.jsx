/** @format */
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { useAddBasketMutation } from "../../services/fetch";

import s from "./style.module.css";

export default function CardProduct({ data, token }) {
  const { _id, name, price, rating, img } = data;
  const [rat, setRat] = useState(rating);

  const navigate = useNavigate();
  const [addProduct, { isLoading }] = useAddBasketMutation();

  const hendeleClickCard = () => navigate(`/${_id}`);

  const hendeleAddProducts = () => addProduct({ product: _id, qty: 1 });

  const disabled = !token;

  return (
    <div className={s.container}>
      <img onClick={hendeleClickCard} src={img} alt="logo" className={s.img} />
      <p>{name}</p>
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
          onClick={hendeleAddProducts}
          disabled={disabled}
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
