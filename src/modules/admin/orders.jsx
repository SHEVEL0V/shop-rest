/** @format */

import React, { useState } from "react";
import OrderCard from "../../components/admin/orderCard";
import { useUpdateOrderMutation } from "../../services/fetch";
import { useGetOrderQuery } from "../../services/fetch";
import useCheckBox from "../../hooks/useCheckBox";
import FilterOrder from "../../components/admin/filterOrder";

export default function Orders() {
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState({});

  const { data, isLoading } = useGetOrderQuery(search);

  const { handleCheckBoxArray } = useCheckBox(setOptions);

  const [updateOrder] = useUpdateOrderMutation();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
      }}
    >
      <FilterOrder
        setSearch={setSearch}
        updateOrder={updateOrder}
        options={options}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {isLoading ||
          data?.map((el) => (
            <OrderCard
              key={el._id}
              data={el}
              handleCheckBox={handleCheckBoxArray}
            />
          ))}
      </div>
    </div>
  );
}
