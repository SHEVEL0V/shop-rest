/** @format */

import React, { useState, useRef } from "react";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Popover from "@mui/material/Popover";
import s from "./style.module.css";

export default function OptonsCard() {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState();
  return (
    <div className={s.container} ref={containerRef}>
      <button onClick={() => setIsOpen((s) => !s)}>open</button>
      <Slide
        in={isOpen}
        direction="up"
        container={containerRef.current}
        mountOnEnter
        unmountOnExit
      >
        <Paper>
          <ul>
            <li>ram</li>
            <li>ssd</li>
            <li>gpu</li>
            <li>type-C</li>
            <li>usb</li>
          </ul>
        </Paper>
      </Slide>
    </div>
  );
}
