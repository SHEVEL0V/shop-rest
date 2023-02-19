/** @format */

import React, { useState } from "react";
import {
  useGetProductsQuery,
  useDeletedProductsMutation,
} from "../../services/fetch";

import Button from "@mui/material/Button";

import ListRemove from "../../components/admin/listRemove";

export default function Admin() {
  const [paramsDelete, setParamsDelete] = useState([]);

  const { data: res } = useGetProductsQuery();
  const [removeProducts, { isSuccess }] = useDeletedProductsMutation();

  const hendleAddItem = (item) =>
    setParamsDelete((params) => [...params, item]);
  const hendleRemoveItem = (item) =>
    setParamsDelete((params) => params.filter((el) => item !== el));

  const hendleRemoveProducts = () => removeProducts({ remove: paramsDelete });

  return (
    <div>
      {res?.products.map((e) => (
        <ListRemove
          data={e}
          key={e._id}
          addItem={hendleAddItem}
          removeItem={hendleRemoveItem}
        />
      ))}

      <Button
        variant="contained"
        component="label"
        sx={{ margin: "20px" }}
        color="success"
        onClick={hendleRemoveProducts}
      >
        Remove
      </Button>
    </div>
  );
}
