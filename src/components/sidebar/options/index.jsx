/** @format */

import React, { useState } from "react";
import BtnSearch from "../../../UI/btnSearch";
import Checkbox from "@mui/material/Checkbox";
import According from "../../../UI/according";
import useCheckBox from "../../../hooks/useCheckBox";
import useSearchParamsCustom from "../../../hooks/useSearchParams";

import s from "./style.module.css";

export default function Options({ options }) {
  const [form, setForm] = useState({});

  const items = Object.keys(options || {});

  const { setParams } = useSearchParamsCustom();

  const handelSearch = () => setParams(form);

  const { handleCheckBoxObject } = useCheckBox(setForm);

  return (
    <According title="options">
      {items?.map((item, key) => (
        <According key={key} title={item} border={form[item]?.length || false}>
          {options[item].map((value) => (
            <div key={value} className={s.container}>
              <span className={s.name}>{value}</span>
              <Checkbox
                name={item}
                value={value}
                onChange={handleCheckBoxObject}
              />
            </div>
          ))}
        </According>
      ))}
      <p></p>
      <BtnSearch onClick={handelSearch}>Search</BtnSearch>
    </According>
  );
}
