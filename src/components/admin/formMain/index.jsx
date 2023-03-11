/** @format */

import React from "react";
import TextField from "@mui/material/TextField";

import s from "./style.module.css";

export default function FormMain({ form = [], data, setForm }) {
  const handleInput = (e) =>
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));

  return (
    <div className={s.textInput}>
      {form?.map((item, index) => (
        <TextField
          sx={{ marginBottom: "10px" }}
          key={index}
          name={item}
          label={item}
          variant="outlined"
          value={data[item] || ""}
          onChange={handleInput}
        />
      ))}
    </div>
  );
}
