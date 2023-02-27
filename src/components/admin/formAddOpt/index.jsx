/** @format */

import React from "react";
import TextInput from "../../../UI/textInput";
import Button from "@mui/material/Button";
import s from "./style.module.css";

export default function FormAddOpt({ options, setOptions }) {
  const handleChangeInput = (value, index, key) => {
    setOptions((state) =>
      state.map((el, i) => (i === index ? { ...el, [key]: value } : el))
    );
  };

  const handleAddOptions = () =>
    setOptions((state) => [...state, { name: "", value: "" }]);

  const handleDeleteOptions = (index) =>
    setOptions((state) => state.filter((_, i) => index !== i));

  console.log(options);

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
