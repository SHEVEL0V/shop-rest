/** @format */
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { setButtonMenu } from "../../../redux/button/slice";
import useMedia from "../../../hooks/useMedia";

export default function MenuButton() {
  const dispatch = useDispatch();
  const { boolean } = useMedia(480);

  useEffect(() => {
    dispatch(setButtonMenu());
  }, [dispatch, boolean]);

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
