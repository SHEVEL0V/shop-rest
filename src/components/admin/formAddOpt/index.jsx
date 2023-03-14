/** @format */

import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from "./style.module.css";

export default function FormAddOpt({ form, setForm }) {
  const options = form?.options || [];

  const setOptions = (value) =>
    setForm((state) => ({ ...state, options: value }));

  const handleChangeInput = (value, index, key) =>
    setOptions(
      options.map((el, i) => (i === index ? { ...el, [key]: value } : el))
    );

  const handleAddOptions = () =>
    setOptions([...options, { name: "", value: "" }]);

  const handleDeleteOptions = (index) =>
    setOptions(options.filter((_, i) => index !== i));

  return (
    <div className={s.container}>
      {options?.map((item, i) => (
        <div key={i} className={s.itemContainer}>
          <TextField
            label={"name"}
            value={item.name || ""}
            onChange={(e) => handleChangeInput(e.target.value, i, "name")}
          />

          <TextField
            sx={{ width: "100%", marginLeft: "10px" }}
            label={"value"}
            value={item.value || ""}
            onChange={(e) => handleChangeInput(e.target.value, i, "value")}
          />
          <Button
            sx={{ marginLeft: "10px" }}
            variant="contained"
            onClick={() => handleDeleteOptions(i)}
          >
            delete
          </Button>
        </div>
      ))}
      <Button variant="contained" onClick={handleAddOptions}>
        ADD options
      </Button>
    </div>
  );
}
