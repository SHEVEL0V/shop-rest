/** @format */

import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function TextFieldComponent({ label, options = [] }) {
  return (
    <TextField
      select
      label={label}
      variant="standard"
      sx={{ width: "100%", margin: "2px" }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
