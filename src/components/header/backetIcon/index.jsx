/** @format */

import React from "react";
import Fab from "@mui/material/Fab";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch } from "react-redux";
import { setButtonBasket } from "../../../redux/buttton/slice";

export default function BacketIkon() {
  const dispatch = useDispatch();
  return (
    <Fab
      color="secondary"
      aria-label="add"
      size="small"
      style={{ marginLeft: 10 }}
      onClick={() => dispatch(setButtonBasket())}
    >
      <ShoppingBasketIcon />
    </Fab>
  );
}
