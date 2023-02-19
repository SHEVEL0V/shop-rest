/** @format */

import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Admin() {
  const key = { add: "ADD", remove: "REMONE", orders: "ORDERS" };
  const [page, setPage] = useState(key.add);
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Button
            color="secondary"
            variant="contained"
            startIcon={<ArrowBackIcon />}
            sx={{ margin: "5px" }}
            onClick={() => navigate("/")}
          ></Button>
          <Button
            variant="contained"
            color={page === key.add ? "warning" : "info"}
            sx={{ margin: "5px" }}
            onClick={() => {
              setPage(key.add);
              navigate("add");
            }}
          >
            add
          </Button>
          <Button
            variant="contained"
            color={page === key.remove ? "warning" : "info"}
            sx={{ margin: "5px" }}
            onClick={() => {
              navigate("remove");
              setPage(key.remove);
            }}
          >
            remove
          </Button>
          <Button
            variant="contained"
            color={page === key.orders ? "warning" : "info"}
            sx={{ margin: "5px" }}
            onClick={() => {
              setPage(key.orders);
              navigate("orders");
            }}
          >
            orders
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
}
