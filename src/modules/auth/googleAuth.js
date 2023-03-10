/** @format */
import { GoogleLogin } from "@react-oauth/google";

import React from "react";

export default function GoogleAuth({ auth, error }) {
  return (
    <GoogleLogin
      onSuccess={(res) => auth({ token: res.credential })}
      onError={() => console.error("Login Failed")}
      useOneTap
    />
  );
}
