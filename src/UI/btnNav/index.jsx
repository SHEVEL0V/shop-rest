/** @format */

import React from "react";
import Button from "@mui/material/Button";

export default function BtnNav({ color = "warning", children, onClick }) {
  return (
    <Button
      variant="contained"
      color={color}
      sx={{ margin: "5px" }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
