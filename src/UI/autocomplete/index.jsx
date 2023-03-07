/** @format */

import * as React from "react";
import TextField from "@mui/material/TextField";
import AutoComp from "@mui/material/Autocomplete";

export default function Autocomplete({
  options = [],
  name,
  onChange,
  size = "medium",
}) {
  return (
    <AutoComp
      sx={{ marginBottom: "10px" }}
      disablePortal
      options={options}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      size={size}
      onChange={(_, value) => onChange(value)}
      renderInput={(params) => <TextField {...params} label={name} />}
    />
  );
}
