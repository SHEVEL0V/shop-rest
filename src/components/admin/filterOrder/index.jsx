/** @format */

import React from "react";
import Button from "@mui/material/Button";
import Autocomplete from "../../../UI/autocomplete";

export default function FilterOrder({ setSearch, updateOrder, options }) {
  const handleClickButton = (status) => updateOrder({ options, status });

  const handleFilter = (status) =>
    status ? setSearch({ status }) : setSearch({});

  return (
    <div
      style={{
        display: "flex",
        height: "50px",
        position: "fixed",
        right: "20px",
        bottom: "100px",
      }}
    >
      <div style={{ width: "250px", marginRight: "20px" }}>
        <Autocomplete
          options={["IDLE", "PENDING", "RESOLVED", "REJECTED"]}
          name={"status"}
          onChange={handleFilter}
        />
      </div>

      <Button
        variant="contained"
        color="success"
        onClick={() => handleClickButton("PENDING")}
      >
        pending
      </Button>
      <Button
        sx={{ marginInline: "20px" }}
        variant="contained"
        onClick={() => handleClickButton("RESOLVED")}
      >
        resolved
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => handleClickButton("REJECTED")}
      >
        rejected
      </Button>
    </div>
  );
}
