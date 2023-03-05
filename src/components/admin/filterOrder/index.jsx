/** @format */

import React from "react";
import Button from "@mui/material/Button";
import Autocomplete from "../../../UI/autocomplete";
import TextFieldComponent from "../../../UI/textField";
import s from "./style.module.css";

const date = (start, end) => {
  const res = [];
  for (let i = start; i <= end; i++) {
    res.push({ value: i, label: i });
  }
  return res;
};

export default function FilterOrder({ setSearch, updateOrder, options }) {
  const handleClickButton = (status) => updateOrder({ options, status });

  const handleFilter = (status) =>
    status ? setSearch({ status }) : setSearch({});

  return (
    <div className={s.container}>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <TextFieldComponent label="day" options={date(1, 31)} />
        <TextFieldComponent label="match" options={date(1, 12)} />
        <TextFieldComponent label="yeas" options={date(2023, 2030)} />
      </div>
      <Autocomplete
        options={["IDLE", "PENDING", "RESOLVED", "REJECTED"]}
        name={"status"}
        onChange={handleFilter}
      />
      <Button
        className={s.button}
        variant="contained"
        onClick={() => handleFilter()}
      >
        search
      </Button>
      <h2>Status:</h2>
      <Button
        className={s.button}
        variant="contained"
        color="success"
        onClick={() => handleClickButton("PENDING")}
      >
        pending
      </Button>
      <Button
        className={s.button}
        variant="contained"
        onClick={() => handleClickButton("RESOLVED")}
      >
        resolved
      </Button>
      <Button
        className={s.button}
        variant="contained"
        color="error"
        onClick={() => handleClickButton("REJECTED")}
      >
        rejected
      </Button>
    </div>
  );
}
