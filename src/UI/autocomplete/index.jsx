/** @format */

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({
  options,
  value,
  name,
  onChange,
  size = "medium",
}) {
  return (
    <Autocomplete
      sx={{ marginBottom: "10px" }}
      disablePortal
      options={options}
      value={value}
      size={size}
      onChange={(_, value) => onChange(value)}
      renderInput={(params) => <TextField {...params} label={name} />}
    />
  );
}
