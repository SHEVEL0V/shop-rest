/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";

import Checkbox from "@mui/material/Checkbox";
import s from "./style.module.css";

export default function ListRemove({ data = [], handleCheckBox }) {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/admin/update/${data._id}`);

  return (
    <Card className={s.container}>
      <div onClick={handleNavigate} className={s.containerInfo}>
        <div className={s.containerImg}>
          <img src={data.img} alt={data.name} style={{ maxHeight: "50px" }} />
        </div>
        <span className={s.containerName}>
          brand:<b>{data.brand}</b>
        </span>
        <span className={s.containerName}>
          name: <b>{data.name}</b>
        </span>
      </div>

      <span
        className={s.containerName}
        style={{
          display: "flex",

          marginLeft: "auto",
          width: "110px",
        }}
      >
        price:<b style={{ marginLeft: "auto", color: "red" }}>{data.price}</b>
      </span>

      <Checkbox value={data._id} onChange={handleCheckBox} />
    </Card>
  );
}
