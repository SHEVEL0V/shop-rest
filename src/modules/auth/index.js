/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/auth/slice";
import { setButtonLogin } from "../../redux/button/slice";
import { useAddUserMutation, useLoginUserMutation } from "../../services/fetch";

import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TextInput from "../../UI/textInput";
import ModalCustom from "../../components/modal";
import GoogleAuth from "./googleAuth";

import s from "./style.module.css";

export default function Auth() {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(true);
  const [form, setForm] = useState({});

  const isOpen = useSelector((store) => store.button.login);

  const [addUser] = useAddUserMutation();
  const [loginUser] = useLoginUserMutation();

  const { name, telephone, password, email, password_again } = form;
  const disabled = checked
    ? email?.trim() === "" || password?.trim() === ""
    : name?.trim() === "" ||
      telephone?.trim() === "" ||
      email?.trim() === "" ||
      password?.trim() === "" ||
      password !== password_again;

  const handleInput = ({ name, value }) =>
    setForm((state) => ({ ...state, [name]: value }));

  const handleAuthSuccess = (payload) => {
    dispatch(setButtonLogin());
    dispatch(setUser(payload));
    setForm({});
  };

  const handleAuth = () =>
    checked
      ? loginUser(form)
          .unwrap()
          .then((payload) => handleAuthSuccess(payload))
          .catch(({ status }) => toast.error(status, { theme: "dark" }))
      : addUser(form)
          .unwrap()
          .then((payload) => handleAuthSuccess(payload))
          .catch(({ status }) => toast.error(status, { theme: "dark" }));

  const handleCloseModal = () => dispatch(setButtonLogin());

  return (
    <div>
      <ModalCustom open={isOpen} onClick={handleCloseModal}>
        <div className={s.auth}>
          <GoogleAuth />
        </div>
        {checked || (
          <TextInput label="name" value={name} onChange={handleInput} />
        )}
        <TextInput label="email" value={email} onChange={handleInput} />
        {checked || (
          <TextInput
            label="telephone"
            value={telephone}
            onChange={handleInput}
          />
        )}
        <TextInput label="password" value={password} onChange={handleInput} />
        {checked || (
          <TextInput
            label="password_again"
            value={password_again}
            onChange={handleInput}
          />
        )}
        <Button
          disabled={disabled}
          sx={{ marginInline: 30 }}
          onClick={handleAuth}
          variant="contained"
        >
          {checked ? "login" : "Auth"}
        </Button>
        <Switch onChange={() => setChecked((s) => !s)} /> authorization{" "}
      </ModalCustom>
      <ToastContainer />
    </div>
  );
}
