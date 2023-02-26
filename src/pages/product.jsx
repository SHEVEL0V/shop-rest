/** @format */

import React from "react";
import Basket from "../modules/basket";
import Product from "../modules/product";
import Header from "../modules/header";

export default function ProductPage() {
  return (
    <div>
      <Header />
      <Basket />
      <Product />
    </div>
  );
}
