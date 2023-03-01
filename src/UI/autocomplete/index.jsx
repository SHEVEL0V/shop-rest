/** @format */

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({ options, name, onChange, size = "medium" }) {
  return (
    <Autocomplete
      sx={{ marginBottom: 2 }}
      disablePortal
      options={options}
      size={size}
      onChange={(_, value) => onChange(value)}
      renderInput={(params) => <TextField {...params} label={name} />}
    />
  );
}
