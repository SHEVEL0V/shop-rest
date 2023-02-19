/** @format */

import React, { useState, useEffect } from "react";
import {
  useAddProductsMutation,
  useAddImageMutation,
} from "../../services/fetch";

import Button from "@mui/material/Button";

import Form from "../../components/admin/form";
import UploadImg from "../../components/admin/uploadImg";

import s from "./style.module.css";

export default function AddProduct() {
  const [file, setFile] = useState("");
  const [form, setForm] = useState({});

  const formData = new FormData();

  const [addProduct, { isSuccess: isSuccessAdd }] = useAddProductsMutation();
  const [addImage, { isSuccess: isSuccessImg, data }] = useAddImageMutation();

  useEffect(() => {
    if (isSuccessImg) {
      addProduct({ ...form, img: data.url });
    }
    if (isSuccessAdd) {
      setForm({});
    }
  }, [addProduct, data?.url, form, isSuccessAdd, isSuccessImg]);

  const hendleSendForm = async () => {
    formData.append("image", file);
    await addImage(formData);
  };

  return (
    <div className={s.container}>
      <UploadImg setFile={setFile} />
      <Form form={form} setForm={setForm} />
      <Button
        variant="contained"
        component="label"
        sx={{ margin: "20px" }}
        color="success"
        onClick={hendleSendForm}
      >
        ADD
      </Button>
    </div>
  );
}
