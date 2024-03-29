/** @format */

import React, { useState } from "react";
import OrderCard from "../../components/admin/orderCard";
import { useUpdateOrderMutation } from "../../services/fetch";
import { useGetOrderQuery } from "../../services/fetch";
import useCheckBox from "../../hooks/useCheckBox";
import FilterOrder from "../../components/admin/filterOrder";
import useSearchParamsCustom from "../../hooks/useSearchParams";
import ListContainer from "../../components/listContainer";
// import { toast } from "react-toastify";

import s from "./style.module.css";

export default function Orders() {
  const [options, setOptions] = useState([]);

  const { setParams, params } = useSearchParamsCustom();

  const { data, isLoading } = useGetOrderQuery(params);

  const disabled = options.length === 0;

  const { handleCheckBoxArray } = useCheckBox(setOptions);
  const [updateOrder] = useUpdateOrderMutation();

  const handleUpdateOrder = (status) => updateOrder({ options, status });

  return (
    <div className={s.containerList}>
      <FilterOrder
        setParams={setParams}
        updateOrder={handleUpdateOrder}
        disabled={disabled}
      />
      <ListContainer isLoading={isLoading}>
        {data?.map((el) => (
          <OrderCard
            key={el._id}
            data={el}
            handleCheckBox={handleCheckBoxArray}
          />
        ))}
      </ListContainer>
    </div>
  );
}
