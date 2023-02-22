/** @format */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBasket } from "../../redux/basket/slice";

import ModalCustom from "../../components/modal";
import CardBasket from "../../components/cardBasket";
import { setButtonBasket } from "../../redux/buttton/slice";
import Button from "@mui/material/Button";

import s from "./style.module.css";
import BasketIkon from "../../components/basketIcon";
import { useAddOrderMutation } from "../../services/fetch";

export default function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector(({ basket }) => basket.data);
  const isOpen = useSelector(({ button }) => button.basket);
  const [addOrder, { isSuccess }] = useAddOrderMutation();

  const qty = basket.length;
  const isClose = qty === 0;

  useEffect(() => {
    if (isClose) {
      dispatch(setButtonBasket());
    }
    if (isSuccess) {
      dispatch(removeBasket());
    }
  }, [dispatch, isSuccess, isClose]);

  const sumPrice = basket
    .map(({ qty, price }) => qty * price)
    .reduce((acc, v) => acc + v, 0);

  const handleClick = () => dispatch(setButtonBasket());
  const handleOrder = () => addOrder({ orders: basket });

  return (
    <div>
      <BasketIkon qty={qty} onClick={handleClick} disabled={isClose} />
      <ModalCustom open={isOpen} onClick={handleClick}>
        {basket !== [] &&
          basket.map((list) => <CardBasket key={list._id} data={list} />)}
        <div className={s.flex}>
          <b className={s.prise}>{sumPrice}</b>
          <Button
            sx={{ width: 200 }}
            color="success"
            variant="contained"
            onClick={handleOrder}
          >
            To order
          </Button>
        </div>
      </ModalCustom>
    </div>
  );
}
