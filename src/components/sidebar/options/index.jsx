/** @format */

import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

import BtnSearch from "../../../UI/btnSearch";

import s from "./style.module.css";
import CardOptions from "../cardOptions";

export default function Options() {
  const [form, setForm] = useState({});

  const memoryValue = [32, 64, 128, 256, 512];
  const ramValue = [4, 6, 8, 12];

  const handelSetForm = (value) => setForm((pre) => ({ ...pre, ...value }));

  return (
    <Accordion className={s.container}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>options</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <CardOptions
            name="memory"
            data={memoryValue}
            setForm={handelSetForm}
          />
          <CardOptions name="Ram" data={ramValue} setForm={handelSetForm} />
          <p></p>
          <BtnSearch onClick={() => console.log(form)}>Search</BtnSearch>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
