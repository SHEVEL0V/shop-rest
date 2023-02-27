/** @format */

import React from "react";
import TextInput from "../../../UI/textInput";

import s from "./style.module.css";

export default function FormAdmin({ form = {}, setForm }) {
  const handleInput = ({ name, value }) =>
    setForm((state) => ({ ...state, [name]: value }));

  return (
    <div className={s.textInput}>
      <TextInput label="type" value={form.type} onChange={handleInput} />
      <TextInput label="brand" value={form.brand} onChange={handleInput} />
      <TextInput label="name" value={form.name} onChange={handleInput} />
      <TextInput label="price" value={form.price} onChange={handleInput} />
      <TextInput label="desc" value={form.desc} onChange={handleInput} />
    </div>
  );
}
