/** @format */

import React from "react";
import { useGetOrderQuery } from "../../services/fetch";

export default function Orders() {
  const { data, isLoading } = useGetOrderQuery();

  return (
    <div style={{ backgroundColor: "white" }}>
      {isLoading ||
        data.map((el) => (
          <div
            key={el._id}
            style={{
              minHeight: "50px",
              padding: "5px",
              margin: "10px",
              backgroundColor: "grey",
            }}
          >
            <b>name:{el.user.name} </b>
            <b>email:{el.user.email}</b>
            <ul>
              {el.orders.map((el) => (
                <li key={el._id}>
                  <b> {el.name}</b>
                  <b> {el.brand}</b>
                  <b> {el.price}</b>
                  <b> qty:{el.qty}</b>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
