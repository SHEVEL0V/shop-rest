/** @format */

import React, { useState, useEffect } from "react";
import {
  useAddProductsMutation,
  useAddImageMutation,
} from "../../services/fetch";

import Button from "@mui/material/Button";

import AddCard from "../../components/admin/itemAddCard";

export default function AddProduct() {
  const [form, setForm] = useState({});
  const [imagePath, setImagePath] = useState("");

  const [addProduct, { isSuccess: isSuccessAdd }] = useAddProductsMutation();
  const [addImage, { data }] = useAddImageMutation();

  useEffect(() => {
    if (isSuccessAdd) {
      setForm({});
    }
    setImagePath(data?.path);
  }, [data, isSuccessAdd]);

  const hendleInputFile = (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    addImage(formData);
  };

  const hendleSendForm = () => addProduct(form);

  return (
    <div>
      <AddCard form={form} setForm={setForm} />
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
