/** @format */

import React from "react";
import TextInput from "../../../UI/textInput";
import UploadImg from "../uploadImg";

import s from "./style.module.css";

export default function FormAdmin({ form, setForm, setFile }) {
  const hendleInput = ({ name, value }) =>
    setForm((state) => ({ ...state, [name]: value }));

  return (
    <div className={s.textInput}>
      <TextInput label="type" value={form.type} onChange={hendleInput} />
      <TextInput label="brand" value={form.brand} onChange={hendleInput} />
      <TextInput label="name" value={form.name} onChange={hendleInput} />
      <TextInput label="price" value={form.price} onChange={hendleInput} />
      <TextInput label="desc" value={form.desc} onChange={hendleInput} />
    </div>
  );
}
