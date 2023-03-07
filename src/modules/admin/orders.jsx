/** @format */

import React, { useState } from "react";
import OrderCard from "../../components/admin/orderCard";
import { useUpdateOrderMutation } from "../../services/fetch";
import { useGetOrderQuery } from "../../services/fetch";
import useCheckBox from "../../hooks/useCheckBox";
import FilterOrder from "../../components/admin/filterOrder";
import useSearchParamsCustom from "../../hooks/useSearchParams";

export default function Orders() {
  const [options, setOptions] = useState([]);

  const { setParams, params } = useSearchParamsCustom();

  const { data, isLoading } = useGetOrderQuery(params);

  const { handleCheckBoxArray } = useCheckBox(setOptions);
  const [updateOrder] = useUpdateOrderMutation();

  const handleUpdateOrder = (status) => updateOrder({ options, status });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
      }}
    >
      <FilterOrder setParams={setParams} updateOrder={handleUpdateOrder} />
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
