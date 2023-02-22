/** @format */

import React, { useState } from "react";
import { useAddProductsMutation } from "../../services/fetch";

import Form from "../../components/admin/form";
import UploadImg from "../../components/admin/uploadImg";
import picture from "../../assets/img.png";

import s from "./style.module.css";
import BtnLoading from "../../UI/btnLoading";

export default function AddProduct() {
  const [file, setFile] = useState("");
  const [form, setForm] = useState({});
  const [urlImg, setUrlImg] = useState(picture);

  const [addProduct, { isLoading }] = useAddProductsMutation();

  const handleSendForm = async () => {
    const formData = new FormData();
    formData.append("img", file);

    Object.keys(form).map((key) => formData.append(key, form[key]));

    addProduct(formData)
      .unwrap()
      .then(() => {
        setForm({});
        setUrlImg(picture);
      });
  };

  return (
    <div className={s.container}>
      <UploadImg setFile={setFile} urlImg={urlImg} setUrlImg={setUrlImg} />
      <Form form={form} setForm={setForm} />
      <BtnLoading loading={isLoading} onClick={handleSendForm}>
        ADD
      </BtnLoading>
    </div>
  );
}
