/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setButtonLogin } from "../../redux/buttton/slice";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import SearchInput from "../../components/header/search";
import BacketIkon from "../../components/header/backetIcon";
import MenuButton from "../../components/header/menuButton";
import AvatarIcon from "../../components/header/avatarIcon";

export default function SearchAppBar() {
  const token = useSelector((s) => s.auth.token);
  const [isAuth] = useState(token);
  const dispatch = useDispatch();

  console.log(isAuth);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <MenuButton />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          SHOP
        </Typography>
        <SearchInput />
        <AvatarIcon />
        <Button
          onClick={() => {
            dispatch(setButtonLogin());
          }}
          color="inherit"
        >
          Login
        </Button>

        <BacketIkon />
      </Toolbar>
    </AppBar>
  );
}
