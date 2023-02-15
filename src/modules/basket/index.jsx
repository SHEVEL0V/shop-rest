/** @format */

import { useSelector, useDispatch } from "react-redux";
import ModalCustom from "../../components/modal";

import CardBasket from "../../components/cardBasket";
import { setButtonBasket } from "../../redux/buttton/slice";
import { useGetBasketQuery } from "../../services/fetch";
import Button from "@mui/material/Button";

import s from "./style.module.css";
import BacketIkon from "../../components/backetIcon";
import { useEffect } from "react";

export default function Basket() {
  const dispatch = useDispatch();
  const isOpenBasket = useSelector((store) => store.button.basket);

  const { isLoading: isLoadingGet, data = [] } = useGetBasketQuery();

  const qty = data.length;
  const disabled = qty === 0;

  const sumPrice = data
    .map(({ qty, product }) => qty * product.price)
    .reduce((acc, v) => acc + v, 0);

  const hendleClick = () => disabled || dispatch(setButtonBasket());

  useEffect(() => {
    if (disabled) {
      dispatch(setButtonBasket());
    }
  }, [dispatch, disabled]);

  return (
    <div>
      <BacketIkon qty={qty} onClick={hendleClick} disabled={disabled} />
      <ModalCustom open={isOpenBasket} onClick={hendleClick}>
        {isLoadingGet ||
          data.map((list) => <CardBasket key={list._id} data={list} />)}
        <div className={s.flex}>
          <b className={s.prise}>{sumPrice}</b>
          <Button
            sx={{ width: 200 }}
            color="success"
            variant="contained"
            onClick={() => console.log("To order")}
          >
            To order
          </Button>
        </div>
      </ModalCustom>
    </div>
  );
}
