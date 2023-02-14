/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { setButtonLogin } from "../../redux/buttton/slice";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import SearchInput from "../../components/header/search";
import BacketIkon from "../../components/header/backetIcon";
import MenuButton from "../../components/header/menuButton";

export default function SearchAppBar() {
  const dispatch = useDispatch();

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
        <Button
          onClick={() => {
            dispatch(setButtonLogin());
          }}
          color="inherit"
        >
          Login
        </Button>
        {/* <AvatarIcon /> */}

        <BacketIkon />
      </Toolbar>
    </AppBar>
  );
}
