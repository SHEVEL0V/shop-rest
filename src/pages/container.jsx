/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../modules/header";

export default function Container() {
  return (
    <>
      <Header />
      <div style={{ height: "100vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
