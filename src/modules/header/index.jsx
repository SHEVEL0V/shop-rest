/** @format */

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { setButtonLogin } from "../../redux/button/slice";
import SearchInput from "../../components/header/search";
import MenuButton from "../../components/header/menuButton";
import AvatarIcon from "../../components/header/avatarIcon";
import Title from "../../UI/title";
import Btn from "../../UI/btn";
import BtnBack from "../../UI/btnBack";
import s from "./style.module.css";

export default function Header() {
  const isAuth = useSelector((s) => s.auth.token);
  const isAuthAdmin = useSelector((s) => s.auth?.user?.role === "admin");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const visibilityAdmin = pathname.split("/")[1] === "admin";
  const visibilityUser = pathname.split("/")[1] === "user";

  const handleColorButton = (value) =>
    pathname === value ? "warning" : "info";

  return (
    <AppBar position="sticky">
      <Toolbar>
        {visibilityAdmin || visibilityUser ? (
          <BtnBack onClick={() => navigate("/")}>home</BtnBack>
        ) : (
          ""
        )}
        {!visibilityAdmin && !visibilityUser && <MenuButton />}
        <Title>SHOP</Title>
        {!visibilityAdmin && <SearchInput />}
        {visibilityAdmin && (
          <div className={s.navContainer}>
            <Btn
              color={handleColorButton("/admin/add")}
              onClick={() => navigate("/admin/add")}
            >
              add product
            </Btn>
            <Btn
              color={handleColorButton("/admin/remove")}
              onClick={() => navigate("/admin/remove")}
            >
              list products
            </Btn>
            <Btn
              color={handleColorButton("/admin/orders")}
              onClick={() => navigate("/admin/orders")}
            >
              all orders
            </Btn>
          </div>
        )}
        {isAuthAdmin && !visibilityAdmin && (
          <Btn onClick={() => navigate("/admin/add")} style={{ width: "none" }}>
            Admin panel
          </Btn>
        )}
        {isAuth ? (
          <AvatarIcon />
        ) : (
          <Btn
            style={{ width: "none" }}
            onClick={() => dispatch(setButtonLogin())}
          >
            Login
          </Btn>
        )}
      </Toolbar>
    </AppBar>
  );
}
