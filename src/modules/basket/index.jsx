/** @format */

import { useSelector, useDispatch } from "react-redux";
import ModalCustom from "../../components/modal";

import CardBasket from "../../components/cardBasket";
import { setButtonBasket } from "../../redux/buttton/slice";
import { useGetBasketQuery } from "../../services/fetch";
import Button from "@mui/material/Button";

import s from "./style.module.css";

export default function Basket() {
  const dispatch = useDispatch();

  const isOpenBasket = useSelector((store) => store.button.basket);
  const { isLoading: isLoadingGet, data = [] } = useGetBasketQuery();

  const sumPrice = data
    .map(({ qty, product }) => qty * product.price)
    .reduce((acc, v) => acc + v, 0);

  const hendleClose = () => dispatch(setButtonBasket());

  return (
    <ModalCustom open={isOpenBasket} onClose={hendleClose}>
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
  );
}
