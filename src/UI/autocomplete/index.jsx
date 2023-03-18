/** @format */

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AutoComp from "@mui/material/Autocomplete";

export default function Autocomplete({
  options = [],
  name,
  onChange,
  value,
  size = "medium",
  freeSolo = false,
}) {
  return (
    <AutoComp
      freeSolo={true}
      sx={{ marginBottom: "10px" }}
      options={options}
      inputValue={value}
      onInputChange={onChange}
      // getOptionLabel={(option) => option[name] || ""}
      // isOptionEqualToValue={(option, value) => option[name] === value[name]}
      size={size}
      renderInput={(params) => <TextField {...params} label={name} />}
    />
  );
}
