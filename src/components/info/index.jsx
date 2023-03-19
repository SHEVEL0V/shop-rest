/** @format */

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Info() {
  const { message, open } = useSelector((store) => store.info);

  useEffect(() => {
    if (message) {
      toast.success(message, { theme: "dark" });
    }
  }, [message, open]);
  return <ToastContainer />;
}
