/** @format */

import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import s from "./style.module.css";

export default function OrderCard({ data }) {
  const email = data?.user?.email;

  return (
    <Card
      sx={{ minWidth: 275, margin: "10px", display: "flex", padding: "5px" }}
    >
      <Typography
        sx={{ fontSize: 20, margin: "5px" }}
        color="text.secondary"
        gutterBottom
      >
        {email}
      </Typography>
      <div className={s.orderContainer}>
        {data?.orders?.map((el) => (
          <div className={s.itemOrder} key={el._id}>
            <img src={el.img} alt="baner" style={{ maxHeight: "40px" }} />
            <div style={{ marginInline: "10px" }}>
              <b>{el.name}</b>
              <div>
                brand : <b>{el.brand}</b>
              </div>
            </div>
            <div>
              <div>
                price : <b style={{ color: "red" }}>{el.price}</b>
              </div>
              <div>
                qty :<b>{el.qty}</b>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        sx={{ marginLeft: "auto" }}
        onClick={() => console.log("Status in the road")}
      >
        in the road
      </Button>
    </Card>
  );
}
