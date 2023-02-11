/** @format */

import { Modal } from "@mui/material";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardBasket from "../../components/cardBasket";
import { setButtonBasket } from "../../redux/buttton/slice";
import { useGetBasketQuery } from "../../services/fetch";
import Button from "@mui/material/Button";

import s from "./style.module.css";

export default function Basket() {
  const dispatch = useDispatch();

  const isOpenBasket = useSelector((store) => store.button.basket);
  const { isLoading: isLoadingGet, data = [] } = useGetBasketQuery();

  return (
    <Modal
      open={isOpenBasket}
      onClose={() => dispatch(setButtonBasket())}
      sx={{ padding: 10 }}
      closeAfterTransition
    >
      <div className={s.container}>
        {isLoadingGet ||
          data.map((list) => <CardBasket key={list._id} data={list} />)}
        <div className={s.flex}>
          <b className={s.prise}>{1111}</b>
          <Button
            sx={{ width: 200 }}
            variant="contained"
            onClick={() => console.log("To order")}
          >
            To order
          </Button>
        </div>
      </div>
    </Modal>
  );
}
