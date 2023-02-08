/** @format */

import { Modal } from "@mui/material";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardBasket from "../../components/cardBasket";
import { setButtonBasket } from "../../redux/buttton/slice";
import { useGetBasketQuery } from "../../services/fetch";

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
      aria-labelledby="child-modal"
      closeAfterTransition
    >
      <div className={s.container} id="child-modal">
        {isLoadingGet ||
          data.map((list) => <CardBasket key={list._id} data={list} />)}
      </div>
    </Modal>
  );
}
