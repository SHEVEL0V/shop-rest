/** @format */

import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export default function OptionsCard() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>options</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <b>options:</b>
          <input type="checkbox"></input>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
