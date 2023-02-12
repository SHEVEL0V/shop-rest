/** @format */

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ButtonSearch from "../../../UI/buttonSearch";
import useSearchParamsCastome from "../../../hooks/useSearchParams";
import s from "./style.module.css";

export default function PriceSlider({ price }) {
  const [value, setValue] = useState(price);

  const { setParams } = useSearchParamsCastome();

  const handleChange = (event, newValue) => setValue(newValue);

  const handleInputMin = (event) => {
    const value = Number(event.target.value);
    setValue((preValue) => [value, preValue[1]]);
  };

  const handleInputMax = (event) => {
    const value = Number(event.target.value);
    setValue((preValue) => [preValue[0], value]);
  };

  return (
    <Box>
      <div className={s.container}>
        <input
          className={s.input}
          type="text"
          value={value[0]}
          onChange={handleInputMin}
        />
        <input
          className={s.input}
          type="text"
          value={value[1]}
          onChange={handleInputMax}
        />
        <ButtonSearch
          onClick={() => setParams({ price: `${value[0]}-${value[1]}` })}
        />
      </div>

      <Slider
        sx={{ marginTop: 1 }}
        color="secondary"
        getAriaLabel={() => "Minimum distance"}
        value={value}
        min={0}
        max={price[1]}
        step={100}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Box>
  );
}
