/** @format */

import React, { useState } from "react";
import OrderCard from "../../components/admin/orderCard";
import Button from "@mui/material/Button";
import { useUpdateOrderMutation } from "../../services/fetch";
import { useGetOrderQuery } from "../../services/fetch";
import useCheckBox from "../../hooks/useCheckBox";
import Autocomplete from "../../UI/autocomplete";

export default function Orders() {
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState({});

  const { data, isLoading } = useGetOrderQuery(search);

  const { addId, removeId } = useCheckBox(setOptions);

  const [updateOrder] = useUpdateOrderMutation();

  const handleClickButton = (status) => updateOrder({ options, status });

  const handleFilter = (status) =>
    status ? setSearch({ status }) : setSearch({});

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "50px",
          position: "fixed",
          right: "20px",
          bottom: "100px",
        }}
      >
        <div style={{ width: "250px", marginRight: "20px" }}>
          <Autocomplete
            options={["IDLE", "PENDING", "RESOLVED", "REJECTED"]}
            name={"status"}
            onChange={handleFilter}
          />
        </div>

        <Button
          variant="contained"
          color="success"
          onClick={() => handleClickButton("PENDING")}
        >
          pending
        </Button>
        <Button
          sx={{ marginInline: "20px" }}
          variant="contained"
          onClick={() => handleClickButton("RESOLVED")}
        >
          resolved
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleClickButton("REJECTED")}
        >
          rejected
        </Button>
      </div>

      {isLoading ||
        data?.map((el) => (
          <OrderCard
            key={el._id}
            data={el}
            addItem={addId}
            removeItem={removeId}
          />
        ))}
    </div>
  );
}
