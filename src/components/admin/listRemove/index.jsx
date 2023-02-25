/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

import Checkbox from "@mui/material/Checkbox";
import s from "./style.module.css";

export default function ListRemove({ data = [], handleCheckBox }) {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/admin/update/${data._id}`);

  return (
    <div className={s.container}>
      <div onClick={handleNavigate} className={s.containerInfo}>
        <div className={s.containerImg}>
          <img src={data.img} alt={data.name} style={{ maxHeight: "50px" }} />
        </div>
        <b className={s.containerName}>brand:{data.brand}</b>
        <b className={s.containerName}>{data.name}</b>
      </div>

      <b
        className={s.containerName}
        style={{ color: "red", marginLeft: "auto" }}
      >
        price:{data.price}
      </b>

      <Checkbox name={data._id} onChange={handleCheckBox} />
    </div>
  );
}
