/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setButtonLogin } from "../../redux/buttton/slice";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import SearchInput from "../../components/header/search";
import MenuButton from "../../components/header/menuButton";
import AvatarIcon from "../../components/header/avatarIcon";
import { useNavigate } from "react-router-dom";

export default function SearchAppBar() {
  const isAuth = useSelector((s) => s.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <MenuButton />
        <Button
          onClick={() => {
            navigate("/admin");
          }}
          color="error"
          variant="contained"
          sx={{ marginRight: 2 }}
        >
          Admin panel
        </Button>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          SHOP
        </Typography>

        <SearchInput />
        {isAuth ? (
          <AvatarIcon />
        ) : (
          <Button
            onClick={() => {
              dispatch(setButtonLogin());
            }}
            color="inherit"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
