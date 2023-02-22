/** @format */

import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

export default function BtnLoading({
  loading = false,
  children,
  onClick = () => {
    console.log("Click");
  },
}) {
  return (
    <LoadingButton
      loading={loading}
      variant="contained"
      sx={{ margin: "20px" }}
      color="success"
      onClick={onClick}
    >
      {children}
    </LoadingButton>
  );
}
