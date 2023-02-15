/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/token/slice";
import { setButtonLogin } from "../../redux/buttton/slice";
import { useAddUserMutation, useLoginUserMutation } from "../../services/fetch";

import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TextInput from "../../UI/textInput";
import ModalCustom from "../../components/modal";

export default function Auth() {
  const dispatch = useDispatch();

  const [checked, setCheked] = useState(true);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRep, setPasswordRep] = useState();

  const isOpen = useSelector((store) => store.button.login);

  const [addUser, { isError: isErrAuth, error: errAdd }] = useAddUserMutation();
  const [loginUser, { isError: isErrLogin, error: errLog, isSuccess, data }] =
    useLoginUserMutation();

  useEffect(() => {
    if (isErrAuth || isErrLogin) {
      toast.error(errLog?.status || errAdd?.status, { theme: "dark" });
    }
    if (isSuccess) {
      dispatch(setButtonLogin());
      dispatch(setToken(data));
    }
  }, [data, dispatch, isSuccess, isErrAuth, isErrLogin, errLog, errAdd]);

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
      <ModalCustom open={isOpen} onClick={hendleCloseModal}>
        <button
          style={{
            width: 30,
            height: 30,
            marginBottom: 10,
            marginLeft: "auto",
            borderRadius: "50%",
          }}
          onClick={hendleCloseModal}
        >
          +
        </button>
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
