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

  console.log(form);

  const { name, telephone, password, email, password_again } = form;
  // const disabled = checked
  //   ? email?.trim() === "" || password?.trim() === ""
  //   : name?.trim() === "" ||
  //     telephone?.trim() === "" ||
  //     email?.trim() === "" ||
  //     password?.trim() === "" ||
  //     password !== password_again;

  const renderInfo = (value = "info") => toast.error(value, { theme: "dark" });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const handleAuthSuccess = (payload) => {
    dispatch(setButtonLogin());
    dispatch(setUser(payload));
    setForm({});
  };

  const handleAuthGoogle = (value) =>
    loginGoogle(value)
      .unwrap()
      .then((payload) => handleAuthSuccess(payload))
      .catch(({ status }) => renderInfo(status));

  const handleAuth = () =>
    checked
      ? loginUser(form)
          .unwrap()
          .then((payload) => handleAuthSuccess(payload))
          .catch(({ status }) => renderInfo(status))
      : addUser(form)
          .unwrap()
          .then((payload) => handleAuthSuccess(payload))
          .catch(({ status }) => renderInfo(status));

  const handleCloseModal = () => dispatch(setButtonLogin());

  return (
    <div>
      <ModalCustom open={isOpen} onClick={handleCloseModal}>
        {checked || (
          <TextField
            margin="normal"
            required
            fullWidth
            label="name"
            value={name}
            onChange={handleInput}
          />
        )}
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          autoFocus
          value={email}
          onChange={handleInput}
        />
        {checked || (
          <TextField
            margin="normal"
            fullWidth
            required
            label="telephone"
            value={telephone}
            onChange={handleInput}
          />
        )}
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={handleInput}
        />
        {checked || (
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            label="password_again"
            value={password_again}
            onChange={handleInput}
          />
        )}

        <Btn disabled={false} onClick={handleAuth}>
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
          <GoogleLogin auth={handleAuthGoogle}>google</GoogleLogin>
        </div>
      </ModalCustom>
      <ToastContainer />
    </div>
  );
}
