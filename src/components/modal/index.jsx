/** @format */

import React from "react";
import { Modal } from "@mui/material";
import s from "./style.module.css";

export default function ModalCustom({ children, open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ paddingTop: 10, paddingInline: 2 }}
      closeAfterTransition={true}
    >
      <div className={s.container}>{children}</div>
    </Modal>
  );
}
