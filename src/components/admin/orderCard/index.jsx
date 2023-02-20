/** @format */

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import s from "./style.module.css";

export default function OrderCard({ data }) {
  const { email, name } = data.user;

  return (
    <Card sx={{ minWidth: 275, margin: "10px", backgroundColor: "#82b1ff" }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {email}
        </Typography>
        {data.orders.map((el) => (
          <ul>
            <li>{el.name}</li>
            <li>{el.brand}</li>
            <li>{el.price}</li>
          </ul>
        ))}
      </CardContent>
    </Card>
  );
}
