/** @format */

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({ options, name, onChange }) {
  return (
    <Autocomplete
      sx={{ marginBottom: 2 }}
      disablePortal
      options={options}
      onChange={(_, value) => onChange(value)}
      renderInput={(params) => <TextField {...params} label={name} />}
    />
  );
}
