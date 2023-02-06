/** @format */

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ButtonSearch from "../../../UI/buttonSearch";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../../redux/filter/slice";

import s from "./style.module.css";

export default function PriceSlider({ maxPrice }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(
    useSelector((state) => state.filter.price)
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <ButtonSearch onClick={() => dispatch(setPrice(value))} />
      </div>

      <Slider
        sx={{ marginTop: 1 }}
        color="secondary"
        getAriaLabel={() => "Minimum distance"}
        value={value}
        min={0}
        step={1000}
        max={Number(maxPrice)}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Box>
  );
}
