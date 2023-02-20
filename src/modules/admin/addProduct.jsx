/** @format */

import React, { useState, useEffect } from "react";
import { useAddProductsMutation } from "../../services/fetch";
import LoadingButton from "@mui/lab/LoadingButton";

import Form from "../../components/admin/form";
import UploadImg from "../../components/admin/uploadImg";
import picture from "../../assets/img.png";

import s from "./style.module.css";

export default function AddProduct() {
  const [file, setFile] = useState("");
  const [form, setForm] = useState({});
  const [urlImg, setUrlImg] = useState(picture);

  const formData = new FormData();

  const [addProduct, { isLoading, data }] = useAddProductsMutation();

  const hendleSendForm = async () => {
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
      <LoadingButton
        variant="contained"
        loading={isLoading}
        sx={{ margin: "20px" }}
        color="success"
        onClick={hendleSendForm}
      >
        ADD
      </LoadingButton>
    </div>
  );
}
