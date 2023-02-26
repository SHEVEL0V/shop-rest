/** @format */

import React from "react";
import Checkbox from "@mui/material/Checkbox";

import s from "./style.module.css";
import According from "../../../UI/according";

export default function CardOptions({ data, title, onChange }) {
  return (
    <According title={title}>
      {data.map((v) => (
        <div key={v} className={s.container}>
          <span className={s.name}>{v}gb</span>
          <Checkbox name={title} value={v} onChange={onChange} />
        </div>
      ))}
    </According>
  );
}
