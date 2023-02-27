/** @format */

import React, { useState } from "react";
import { useAddProductsMutation } from "../../services/fetch";

import FormMain from "../../components/admin/formMain";
import UploadImg from "../../components/admin/uploadImg";
import picture from "../../assets/img.png";

import s from "./style.module.css";
import BtnLoading from "../../UI/btnLoading";
import FormAddOpt from "../../components/admin/formAddOpt";

export default function AddProduct() {
  const [file, setFile] = useState("");
  const [form, setForm] = useState({});
  const [optionsForm, setOptionsForm] = useState([]);
  const [urlImg, setUrlImg] = useState(picture);

  const [addProduct, { isLoading }] = useAddProductsMutation();

  const handleSendForm = async () => {
    const formData = new FormData();
    formData.append("img", file);

    Object.keys(form).map((key) => formData.append(key, form[key]));

    formData.append("options", JSON.stringify(optionsForm));

    addProduct(formData)
      .unwrap()
      .then(() => {
        setForm({});
        setOptionsForm([]);
        setUrlImg(picture);
      });
  };

  return (
    <div className={s.container}>
      <div style={{ display: "flex", width: "100%" }}>
        <UploadImg setFile={setFile} urlImg={urlImg} setUrlImg={setUrlImg} />
        <FormMain form={form} setForm={setForm} />
      </div>

      <FormAddOpt options={optionsForm} setOptions={setOptionsForm} />
      <BtnLoading loading={isLoading} onClick={handleSendForm}>
        ADD
      </BtnLoading>
    </div>
  );
}
