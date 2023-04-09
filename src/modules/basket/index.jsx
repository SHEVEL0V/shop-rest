/** @format */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBasket } from "../../redux/basket/slice";
import { setButtonBasket } from "../../redux/button/slice";
import { useAddOrderMutation } from "../../services/fetch";
import ModalCustom from "../../components/modal";
import CardBasket from "../../components/cardBasket";
import BasketIkon from "../../components/basketIcon";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";

import s from "./style.module.css";

export default function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector(({ basket }) => basket.data);
  const isOpen = useSelector(({ button }) => button.basket);
  const [addOrder] = useAddOrderMutation();

  const qty = basket.length;
  const isClose = qty === 0;

  // useEffect(() => {
  //   if (isClose) {
  //     dispatch(setButtonBasket());
  //   }
  // }, [dispatch, isClose]);

  const sumPrice = basket
    .map(({ qty, price }) => qty * price)
    .reduce((acc, v) => acc + v, 0);

  const handleClick = () => dispatch(setButtonBasket());
  const handleOrder = () =>
    addOrder({ orders: basket })
      .unwrap()
      .then(() => {
        dispatch(removeBasket());
        toast.sasses("Order accepted");
      })
      .catch((err) => toast.error(err));

  return (
    <div>
      <BasketIkon qty={qty} onClick={handleClick} disabled={isClose} />
      <ModalCustom open={isOpen} onClick={handleClick}>
        <div className={s.container}>
          {basket !== [] &&
            basket.map((list) => <CardBasket key={list._id} data={list} />)}
        </div>
        <div className={s.priceContainer}>
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
