/** @format */

import React from "react";
import TextField from "@mui/material/TextField";

export default function TextInput({ label = "text", value, onChange }) {
  return (
    <TextField
      sx={{ marginBottom: 2 }}
      label={label}
      value={value}
      name={label}
      //   autoComplete="current-password"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
