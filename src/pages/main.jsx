/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../modules/header";
import Basket from "../modules/basket";
import Auth from "../modules/auth";

export default function Main() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 150px)",
        }}
      >
        <Outlet />
      </div>
      <Footer />
      <Basket />
      <Auth />
    </>
  );
}
