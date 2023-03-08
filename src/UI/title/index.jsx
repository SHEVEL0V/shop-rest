/** @format */

import React from "react";
import Typography from "@mui/material/Typography";

export default function Title({ children }) {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
    >
      {children}
    </Typography>
  );
}
