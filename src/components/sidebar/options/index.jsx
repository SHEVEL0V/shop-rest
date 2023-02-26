/** @format */

import React, { useState } from "react";
import BtnSearch from "../../../UI/btnSearch";

import CardOptions from "../cardOptions";
import According from "../../../UI/according";
import useCheckBox from "../../../hooks/useCheckBox";

// import s from "./style.module.css";

export default function Options() {
  const [form, setForm] = useState({});

  const memoryValue = [32, 64, 128, 256, 512];
  const ramValue = [4, 6, 8, 12];

  const handelSearch = () => console.log("Search:", form);

  const { handleCheckBoxObject } = useCheckBox(setForm);

  return (
    <According title="options">
      <CardOptions
        title="Memory"
        data={memoryValue}
        onChange={handleCheckBoxObject}
      />
      <CardOptions
        title="Ram"
        data={ramValue}
        onChange={handleCheckBoxObject}
      />
      <p></p>
      <BtnSearch onClick={handelSearch}>Search</BtnSearch>
    </According>
  );
}
