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

  const hendeleClickCard = () => navigate(`/${_id}`);
  const hendeleAddProducts = () => dispatch(setBasket(data));

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
        <Button
          onClick={hendeleAddProducts}
          disabled={isDisable()}
          variant="contained"
          sx={{ marginLeft: "auto" }}
        >
          <span>{!isDisable() ? "Add to basket" : "item in the basket"}</span>
        </Button>
      </div>
    </div>
  );
}
