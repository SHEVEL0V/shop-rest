/** @format */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBasket } from "../../redux/basket/slice";
import useItemByBasket from "../../hooks/useItemByBasket";

import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import s from "./style.module.css";

export default function CardProduct({ data, token }) {
  const { _id, name, price, rating, img } = data;
  const [rat, setRat] = useState(rating);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDisable } = useItemByBasket(_id);

  const handleClickCard = () => navigate(`/${_id}`);
  const handleAddProducts = () => dispatch(setBasket(data));

  return (
    <div className={s.container}>
      <img onClick={handleClickCard} src={img} alt={name} className={s.img} />
      <h2>{name}</h2>
      <b className={s.flex}>
        Rating
        <Rating
          sx={{ marginBottom: 1, marginLeft: 1 }}
          value={rat}
          onChange={(e, newValue) => setRat(newValue)}
        />
      </b>
      <h3 className={s.prise}>
        price: <span>{price}</span> UAH
      </h3>
      <Button
        onClick={handleAddProducts}
        color="secondary"
        disabled={isDisable()}
        variant="contained"
      >
        <span>{!isDisable() ? "Add to basket" : "item in the basket"}</span>
      </Button>
    </div>
  );
}
