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

  const [form, setForm] = useState({});

  const hendleInput = ({ name, value }) =>
    setForm((state) => ({ ...state, [name]: value }));

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
      setForm({});
    }
  }, [data, dispatch, isSuccess, isErrAuth, isErrLogin, errLog, errAdd]);

  const { name, password, email, password_egain } = form;

  const disabled = checked
    ? email?.trim() === "" || password?.trim() === ""
    : name?.trim() === "" ||
      email?.trim() === "" ||
      password?.trim() === "" ||
      password?.trim() !== password_egain;

  const hendleAuth = () => (checked ? loginUser(form) : addUser(form));

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
        {checked || (
          <TextInput label="name" value={name} onChange={hendleInput} />
        )}
        <TextInput label="email" value={email} onChange={hendleInput} />
        <TextInput label="password" value={password} onChange={hendleInput} />
        {checked || (
          <TextInput
            label="password_egain"
            value={password_egain}
            onChange={hendleInput}
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
