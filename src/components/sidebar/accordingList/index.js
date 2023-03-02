/** @format */

import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import According from "../../../UI/according";
import BtnLoading from "../../../UI/btnLoading";
import useCheckBox from "../../../hooks/useCheckBox";
import useSearchParamsCustom from "../../../hooks/useSearchParams";

import s from "./style.module.css";

export default function AccordingList({ data = [], title }) {
  const { setParams, getParams } = useSearchParamsCustom();

  const [options, setOptions] = useState(getParams(title));

  const { handleCheckBoxArray } = useCheckBox(setOptions);

  const handleChecked = (value) => options.includes(value);

  const handlerClickSearch = () => setParams({ [title]: options });

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
      <BtnLoading onClick={handlerClickSearch}>search</BtnLoading>
    </According>
  );
}
