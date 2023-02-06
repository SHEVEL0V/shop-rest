/** @format */
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { setButtonMenu } from "../../../redux/buttton/slice";

export default function MenuButton() {
  const dispatch = useDispatch();
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      sx={{ mr: 2 }}
      onClick={() => dispatch(setButtonMenu())}
    >
      <MenuIcon />
    </IconButton>
  );
}
