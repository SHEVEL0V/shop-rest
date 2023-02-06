/** @format */

import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import SearchInput from "../../components/header/search";
import AvatarIcon from "../../components/header/avatarIcon";
import BacketIkon from "../../components/header/backetIcon";
import MenuButton from "../../components/header/menuButton";

export default function SearchAppBar() {
  return (
    <AppBar position="static">
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
        <BacketIkon />
      </Toolbar>
    </AppBar>
  );
}
