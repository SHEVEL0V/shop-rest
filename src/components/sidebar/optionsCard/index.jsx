/** @format */

import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
// import s from "./style.module.css";

export default function OptonsCard() {
  return (
    <Accordion sx={{ backgroundColor: "#D5CDE3" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>options</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          <li style={{ border: "solid" }}>1</li>
          <li style={{ border: "solid" }}>2</li>
          <li style={{ border: "solid" }}>3</li>
          <li style={{ border: "solid" }}>4</li>
          <li style={{ border: "solid" }}>5</li>
          <li style={{ border: "solid" }}>6</li>
          <li style={{ border: "solid" }}>7</li>
          <li style={{ border: "solid" }}>8</li>
          <li style={{ border: "solid" }}>9</li>
          <li style={{ border: "solid" }}>10</li>
        </ul>
      </AccordionDetails>
    </Accordion>
  );
}
