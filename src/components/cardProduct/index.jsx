/** @format */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBasket } from "../../redux/basket/slice";
import useItemByBasket from "../../hooks/useItemByBasket";

import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import s from "./style.module.css";
import { useAddRatingMutation } from "../../services/fetch";
import { Card } from "@mui/material";

export default function CardProduct({ data, token }) {
  const { _id, name, price, rating, img, brand } = data;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDisable } = useItemByBasket(_id);

  const handleClickCard = () => navigate(`/${brand}/${_id}`);
  const handleAddProducts = () => dispatch(setBasket(data));

  const [addRating] = useAddRatingMutation();

  const handleUpdateRating = (e, value) =>
    addRating({ itemId: _id, rate: value });

  return (
    <Card className={s.container} sx={{ transition: "all 350ms ease-in-out;" }}>
      <img onClick={handleClickCard} src={img} alt={name} className={s.img} />
      <h2>{name}</h2>
      <b className={s.flex}>
        Rating
        <Rating
          sx={{ marginBottom: 1, marginLeft: 1 }}
          value={rating}
          onChange={handleUpdateRating}
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
    </Card>
  );
}
