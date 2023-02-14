/** @format */

import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TextInput from "../../UI/textInput";
import { useAddUserMutation, useLoginUserMutation } from "../../services/fetch";

import ModalCustom from "../../components/modal";
import { setButtonLogin } from "../../redux/buttton/slice";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/token/slice";

export default function Auth() {
  const [checked, setCheked] = useState(true);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRep, setPasswordRep] = useState();

  const isOpen = useSelector((store) => store.button.login);
  const dispatch = useDispatch();

  const [addUser, { isError, error }] = useAddUserMutation();
  const [loginUser, { isSuccess, data }] = useLoginUserMutation();

  useEffect(() => {
    if (isError) {
      toast.error(error?.status, { theme: "dark" });
    }
    if (isSuccess) {
      dispatch(setButtonLogin());
      dispatch(setToken(data?.token));
    }
  }, [data?.token, dispatch, error?.status, isError, isSuccess]);

  const disabled = checked
    ? email?.trim() === "" || password?.trim() === ""
    : name === "" ||
      email === "" ||
      password === "" ||
      password !== passwordRep;

  const hendleAuth = () =>
    checked
      ? loginUser({ email, password })
      : addUser({ name, email, password });

  const hendleCloseModal = () => dispatch(setButtonLogin());

  return (
    <div>
      <ModalCustom open={isOpen} onClose={hendleCloseModal}>
        {checked || <TextInput label="name" value={name} onChange={setName} />}
        <TextInput label="email" value={email} onChange={setEmail} />
        <TextInput label="password" value={password} onChange={setPassword} />
        {checked || (
          <TextInput
            label="password egain"
            value={passwordRep}
            onChange={setPasswordRep}
          />
        )}
        <Button
          disabled={disabled}
          sx={{ marginInline: 30 }}
          onClick={hendleAuth}
          variant="contained"
        >
          {checked ? "login" : "Auth"}
        </Button>
        <p>
          <Switch onChange={() => setCheked((s) => !s)} /> authorization
        </p>
      </ModalCustom>

      <ToastContainer />
    </div>
  );
}
