/** @format */

import React from "react";
import Button from "@mui/material/Button";
import TextInput from "../../../UI/textInput";
import picture from "../../../assets/img.png";
import s from "./style.module.css";

export default function AdminItemCard({ form, setForm }) {
  const hendleInput = ({ name, value }) =>
    setForm((state) => ({ ...state, [name]: value }));

  return (
    <div className={s.container}>
      <div className={s.upload}>
        <img className={s.img} src={picture} alt="produkt"></img>
        <Button variant="contained" component="label">
          Upload
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            // onChange={inputFile}
          />
        </Button>
      </div>
      <div className={s.textInput}>
        <TextInput label="type" value={form.type} onChange={hendleInput} />
        <TextInput label="brand" value={form.brand} onChange={hendleInput} />
        <TextInput label="name" value={form.name} onChange={hendleInput} />
        <TextInput label="price" value={form.price} onChange={hendleInput} />
        <TextInput label="desc" value={form.desc} onChange={hendleInput} />
      </div>
    </div>
  );
}
