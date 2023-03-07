/** @format */

import React from "react";
import TextInput from "../../../UI/textInput";
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
          <TextInput
            label={"name"}
            value={item.name}
            onChange={({ value }) => handleChangeInput(value, i, "name")}
          />
          <div style={{ width: "20px" }}></div>
          <TextInput
            label={"value"}
            value={item.value}
            onChange={({ value }) => handleChangeInput(value, i, "value")}
          />
          <Button
            sx={{ marginBottom: "20px", marginLeft: "10px" }}
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
