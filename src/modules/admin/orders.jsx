/** @format */

import React from "react";
import OrderCard from "../../components/admin/orderCard";
import { useGetOrderQuery } from "../../services/fetch";

export default function Orders() {
  const { data, isLoading } = useGetOrderQuery();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isLoading || data?.map((el) => <OrderCard key={el._id} data={el} />)}
    </div>
  );
}
