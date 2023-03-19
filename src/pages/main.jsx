/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../modules/header";
import Basket from "../modules/basket";
import Auth from "../modules/auth";
import Info from "../components/info";

import s from "./style.module.css";

export default function Main() {
  return (
    <>
      <Header />
      <div className={s.container}>
        <Outlet />
      </div>
      <Footer />
      <Basket />
      <Auth />
      <Info />
    </>
  );
}
