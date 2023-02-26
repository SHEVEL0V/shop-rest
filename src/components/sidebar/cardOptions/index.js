/** @format */

import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import useCheckBox from "../../../hooks/useCheckBox";

export default function CardOptions({ data, name, setForm }) {
  const [value, setValue] = useState([]);

  const { handleCheckBox } = useCheckBox(setValue);

  const handleChange = (e) => {
    handleCheckBox(e);
    setForm({ [name]: `${Math.min(...value)}-${Math.max(...value)}` });
  };
  //   onSet({ [name]: `${Math.min(...value)}-${Math.max(...value)}` });

  return (
    <div>
      <b>{name}:</b>
      {data.map((v) => (
        <div key={v}>
          <span>{v}gb</span>
          <Checkbox name={String(v)} onChange={handleChange} />
        </div>
      ))}
    </div>
  );
}
