/** @format */

import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import According from "../../../UI/according";
import Btn from "../../../UI/btn";
import useCheckBox from "../../../hooks/useCheckBox";

import s from "./style.module.css";

export default function AccordingList({ data = [], title, setParams }) {
  const [options, setOptions] = useState("");

  const { handleCheckBoxArray } = useCheckBox(setOptions);

  const handleChecked = (value) => options.includes(value);

  const handlerClickSearch = () => setParams({ page: 1, [title]: options });

  return (
    <According title={title} bgColor={options.length !== 0}>
      {data.map((value) => (
        <div key={value} className={s.container}>
          <span className={s.name}>{value}</span>
          <Checkbox
            name={title}
            value={value}
            onChange={handleCheckBoxArray}
            checked={handleChecked(value)}
          />
        </div>
      ))}
      <Btn onClick={handlerClickSearch}>search</Btn>
    </According>
  );
}
