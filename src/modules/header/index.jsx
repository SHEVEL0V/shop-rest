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
import BtnNav from "../../UI/btnNav";
import BtnBack from "../../UI/btnBack";

export default function Header() {
  const isAuth = useSelector((s) => s.auth.token);
  const isAuthAdmin = useSelector((s) => s.auth?.user?.role === "admin");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isPathAdmin = pathname.split("/")[1] === "admin";

  const handleColorButton = (value) =>
    pathname === value ? "warning" : "info";

  return (
    <AppBar position="sticky">
      <Toolbar>
        {isPathAdmin && <BtnBack onClick={() => navigate("/")}>shop</BtnBack>}
        {!isPathAdmin && <MenuButton />}
        <Title>@SHOP</Title>
        {!isPathAdmin && <SearchInput />}
        {isPathAdmin && (
          <>
            <BtnNav
              color={handleColorButton("/admin/add")}
              onClick={() => navigate("add")}
            >
              add product
            </BtnNav>
            <BtnNav
              color={handleColorButton("/admin/remove")}
              onClick={() => navigate("remove")}
            >
              list products
            </BtnNav>
            <BtnNav
              color={handleColorButton("/admin/orders")}
              onClick={() => navigate("orders")}
            >
              all orders
            </BtnNav>
          </>
        )}
        {isAuthAdmin && !isPathAdmin && (
          <BtnNav onClick={() => navigate("/admin/add")}>Admin panel</BtnNav>
        )}
        {isAuth ? (
          <AvatarIcon />
        ) : (
          <BtnNav onClick={() => dispatch(setButtonLogin())}>Login</BtnNav>
        )}
      </Toolbar>
    </AppBar>
  );
}
