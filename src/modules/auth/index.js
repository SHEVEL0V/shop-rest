/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/auth/slice";
import { setButtonLogin } from "../../redux/button/slice";
import {
  useAddUserMutation,
  useLoginUserMutation,
  useLoginGoogleMutation,
} from "../../services/fetch";
import Switch from "@mui/material/Switch";
import Btn from "../../UI/btn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import ModalCustom from "../../components/modal";
import GoogleLogin from "./googleAuth";

import s from "./style.module.css";
import { Typography } from "@mui/material";

export default function Auth() {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(true);
  const [form, setForm] = useState({});

  const isOpen = useSelector((store) => store.button.login);

  const [addUser] = useAddUserMutation();
  const [loginUser] = useLoginUserMutation();
  const [loginGoogle] = useLoginGoogleMutation();

  const formSingIn = ["email", "password"];
  const formSingUp = [
    "name",
    "email",
    "telephone",
    "password",
    "password_again",
  ];

  const mainForm = checked ? formSingIn : formSingUp;

  const renderError = ({ status }) => toast.error(status, { theme: "dark" });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const handleAuthSuccess = (payload) =>
    dispatch(setButtonLogin()) && dispatch(setUser(payload)) && setForm({});

  const handleAuthGoogle = (value) =>
    loginGoogle(value).unwrap().then(handleAuthSuccess).catch(renderError);

  const handleClickButtonAuth = () =>
    checked
      ? loginUser(form).unwrap().then(handleAuthSuccess).catch(renderError)
      : addUser(form).unwrap().then(handleAuthSuccess).catch(renderError);

  const handleCloseModal = () => dispatch(setButtonLogin());

  return (
    <div>
      <ModalCustom open={isOpen} onClick={handleCloseModal}>
        {mainForm.map((item, index) => (
          <TextField
            key={index}
            margin="normal"
            required
            fullWidth
            error={item === "password_again" && form[item] !== form.password}
            label={item}
            name={item}
            type={item}
            value={form[item] || ""}
            onChange={handleInput}
          />
        ))}

        <Btn disabled={false} onClick={handleClickButtonAuth}>
          {checked ? "sing in" : "sing up"}
        </Btn>
        <div className={s.authContainer}>
          <div className={s.switch}>
            <Switch onChange={() => setChecked((s) => !s)} />
            <Typography component="h1" variant="body1" color="text.secondary">
              {checked
                ? "Don't have an account? Sign Up"
                : "Already have an account? Sign in"}
            </Typography>
          </div>
          <GoogleLogin auth={handleAuthGoogle} error={renderError}>
            google
          </GoogleLogin>
        </div>
      </ModalCustom>
      <ToastContainer />
    </div>
  );
}
