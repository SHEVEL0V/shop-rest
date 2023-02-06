/** @format */

import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Modal from "@mui/material/Modal";
import Basket from "../../../modules/basket";

export default function BacketIkon() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fab
      color="secondary"
      aria-label="add"
      size="small"
      style={{ marginLeft: 10 }}
      onClick={() => setIsOpen((v) => !v)}
    >
      <ShoppingBasketIcon />
    </Fab>
  );
}
