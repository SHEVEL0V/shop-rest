/** @format */

import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import getTime from "../../../helpers/getTime";

import s from "./style.module.css";

export default function OrderCard({ data, handleCheckBox }) {
  const { user, status, orders, createdAt } = data;
  const { email, telephone } = user;

  const totalPrice = orders.reduce((acc, e) => acc + e.price, 0);

  return (
    <Card className={s.container}>
      <div className={s.emailContainer}>
        <Typography sx={{ fontSize: 16 }} color="text.primary">
          date:{getTime(createdAt)}
        </Typography>
        <Typography sx={{ fontSize: 18 }} color="text.secondary">
          {email}
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary">
          tel:{telephone}
        </Typography>
        <Typography
          sx={{ fontSize: 16 }}
          style={{
            borderRadius: "3px",
            marginRight: "5px",
            backgroundColor:
              status === "PENDING"
                ? "#96F095"
                : status === "RESOLVED"
                ? "#81BCDB"
                : "#FF927B",
          }}
          color="text.secondary"
        >
          _status:{status}
        </Typography>
      </div>

      <div className={s.orderContainer}>
        {orders?.map((el) => (
          <div className={s.itemOrderContainer} key={el._id}>
            <div className={s.itemOrder} style={{ minWidth: "150px" }}>
              brand: <b>{el.brand}</b>
            </div>
            <b className={s.itemOrder} style={{ width: "100%" }}>
              {el.name}
            </b>

            <div className={s.itemOrder}>
              price:
              <b style={{ width: "60px", marginLeft: "2px" }}>{el.price}</b>
            </div>
            <div className={s.itemOrder}>
              qty:<b>{el.qty}</b>
            </div>
          </div>
        ))}
        <div style={{ marginTop: "auto", marginLeft: "auto" }}>
          total price:<b style={{ color: "#FF0530" }}>{totalPrice}</b>
        </div>
      </div>
      <Checkbox
        value={data._id}
        onChange={handleCheckBox}
        sx={{ height: "50px", marginTop: "auto", marginBottom: "auto" }}
      />
    </Card>
  );
}
