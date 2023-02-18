/** @format */

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";

export default function Admin() {
  const [page, setPage] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Button
            variant="contained"
            color={page ? "info" : "warning"}
            sx={{ margin: "5px" }}
            onClick={() => {
              navigate("update");
              setPage(false);
            }}
          >
            update
          </Button>
          <Button
            variant="contained"
            color={page ? "warning" : "info"}
            sx={{ margin: "5px" }}
            onClick={() => {
              setPage(true);
              navigate("add");
            }}
          >
            add
          </Button>
        </Toolbar>
        <Outlet />
      </AppBar>
    </div>
  );
}
