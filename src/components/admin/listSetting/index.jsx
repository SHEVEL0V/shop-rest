/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

import Checkbox from "@mui/material/Checkbox";
import s from "./style.module.css";

export default function ListCard({ data = [], addItem, removeItem }) {
  const navigate = useNavigate();

  const hendleChecked = (e) =>
    e.target.checked ? addItem(e.target.name) : removeItem(e.target.name);

  const hendleNavigate = () => navigate(`/update/:${data._id}`);

  return (
    <div className={s.container}>
      <img
        src={data.img}
        alt="baner"
        style={{ maxHeight: "50px", marginRight: "10px" }}
      />
      <b>{data.brand}</b>
      <b style={{ color: "blue", marginLeft: "10px" }}>{data.name}</b>
      <b style={{ color: "red", marginLeft: "10px" }}>{data.price}</b>
      <Checkbox
        name={data._id}
        sx={{ marginLeft: "auto" }}
        onChange={hendleChecked}
      />
    </div>
  );
}
