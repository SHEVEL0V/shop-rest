/** @format */

import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import s from "./style.module.css";
import { useAddUserMutation } from "../../services/fetch";

export default function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const [addUser, { isLoading }] = useAddUserMutation();

  const disabled =
    name === "" || email === "" || password === "" || passwordAgain === "";

  const hendleAuth = () => {
    addUser({ name, email, password });
  };

  return (
    <div className={s.container}>
      <h2>Auth</h2>
      <TextField
        sx={{ marginBottom: 2 }}
        id="outlined-multiline-flexible"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        multiline
        maxRows={4}
      />
      <TextField
        sx={{ marginBottom: 2 }}
        id="outlined-multiline-flexible"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        multiline
        maxRows={4}
      />
      <TextField
        sx={{ marginBottom: 2 }}
        id="outlined-multiline-flexible"
        label="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        multiline
        maxRows={4}
      />
      <TextField
        sx={{ marginBottom: 2 }}
        id="outlined-multiline-flexible"
        label="New password , again"
        value={passwordAgain}
        onChange={(e) => setPasswordAgain(e.target.value)}
        multiline
        maxRows={4}
      />
      <Button
        disabled={disabled}
        sx={{ marginInline: 30 }}
        onClick={hendleAuth}
        variant="contained"
      >
        Auth
      </Button>
    </div>
  );
}
