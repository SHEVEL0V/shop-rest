/** @format */

import { display } from "@mui/system";
import React from "react";
import OrderCard from "../../components/admin/orderCard";
import { useGetOrderQuery } from "../../services/fetch";

export default function Orders() {
  const { data, isLoading } = useGetOrderQuery();

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isLoading || data.map((el) => <OrderCard key={el.id} data={el} />)}
    </div>
  );
}
