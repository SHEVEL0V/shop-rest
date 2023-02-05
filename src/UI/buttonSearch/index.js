/** @format */
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export default function ButtonSearch({ onClick }) {
  return (
    <Button variant="contained" endIcon={<SearchIcon />} onClick={onClick}>
      ok
    </Button>
  );
}
