/** @format */

import React, { useEffect, useState } from "react";
import Form from "../../components/admin/form";
import UploadImg from "../../components/admin/uploadImg";
import { useParams } from "react-router-dom";
import {
  useGetProductsByIdQuery,
  useUpdateProductsMutation,
} from "../../services/fetch";
import BtnLoading from "../../UI/btnLoading";

export default function UpdateProducts() {
  const [file, setFile] = useState(false);
  const [form, setForm] = useState({});
  const [urlImg, setUrlImg] = useState("");
  const { id } = useParams();
  const { data, isSuccess } = useGetProductsByIdQuery(id);
  const [updateProducts] = useUpdateProductsMutation(id);

  const handlerUpdate = () => {
    const data = new FormData();

    if (file) {
      data.append("img", file);
    }

    Object.keys(form).map((key) => data.append(key, form[key]));

    updateProducts({ id, data });
  };

  useEffect(() => {
    if (isSuccess) {
      setForm(data);
      setUrlImg(data.img);
      console.log(data);
    }
  }, [data, isSuccess]);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <UploadImg urlImg={urlImg} setUrlImg={setUrlImg} setFile={setFile} />
      <Form form={form} setForm={setForm} />
      <BtnLoading onClick={handlerUpdate}>Update</BtnLoading>
    </div>
  );
}
