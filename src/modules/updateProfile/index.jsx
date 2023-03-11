/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormMain from "../../components/admin/formMain";
import UploadImg from "../../components/admin/uploadImg";
import { setUser } from "../../redux/auth/slice";
import { useUpdateUserMutation } from "../../services/fetch";
import Btn from "../../UI/btn";
import picture from "../../assets/img.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./style.module.css";

export default function UpdateProfile() {
  const user = useSelector((store) => store.auth.user);
  const [file, setFile] = useState(false);
  const [form, setForm] = useState(user);
  const [urlImg, setUrlImg] = useState(user?.picture || picture);
  const dispatch = useDispatch();

  const FORM = [
    "name",
    "telephone",
    "delivery",
    "new password",
    "again password",
  ];

  const formData = new FormData();
  const [updateUser] = useUpdateUserMutation();

  const handleUpdateUser = () =>
    updateUser(formData)
      .unwrap()
      .then((payload) => {
        toast.success("success update", { theme: "dark" });
        dispatch(setUser(payload));
      });

  const handlerClickButton = () => {
    Object.keys(form).map((key) => formData.append(key, form[key]));
    if (file) {
      formData.append("img", file);
    }

    handleUpdateUser();
  };

  return (
    <div className={s.container}>
      <div style={{ display: "flex", width: "100%" }}>
        <UploadImg setFile={setFile} urlImg={urlImg} setUrlImg={setUrlImg} />
        <FormMain data={form} form={FORM} setForm={setForm} />
      </div>
      <Btn loading={false} onClick={handlerClickButton}>
        UPDATE PROFILE
      </Btn>
      <ToastContainer />
    </div>
  );
}
