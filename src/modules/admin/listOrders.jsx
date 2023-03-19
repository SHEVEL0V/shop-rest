/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import OrderCard from "../../components/admin/orderCard";
import { useUpdateOrderMutation } from "../../services/fetch";
import { useGetOrderQuery } from "../../services/fetch";
import useCheckBox from "../../hooks/useCheckBox";
import FilterOrder from "../../components/admin/filterOrder";
import useSearchParamsCustom from "../../hooks/useSearchParams";
import ListContainer from "../../components/listContainer";
import { renderInfo } from "../../redux/info/slice";

import s from "./style.module.css";

export default function Orders() {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);

  const { setParams, params } = useSearchParamsCustom();

  const { data, isLoading } = useGetOrderQuery(params);

  const { handleCheckBoxArray } = useCheckBox(setOptions);
  const [updateOrder] = useUpdateOrderMutation();

  const handleUpdateOrder = (status) =>
    updateOrder({ options, status })
      .unwrap()
      .then(() => dispatch(renderInfo("success update order")))
      .catch((err) => dispatch(renderInfo(err.message)));

  return (
    <div className={s.containerList}>
      <FilterOrder setParams={setParams} updateOrder={handleUpdateOrder} />
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
