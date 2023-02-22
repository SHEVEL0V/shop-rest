/** @format */

import React, { useState } from "react";
import {
  useGetProductsQuery,
  useDeletedProductsMutation,
} from "../../services/fetch";

import ListRemove from "../../components/admin/listRemove";
import Sidebar from "../sidebar";
import BtnRemove from "../../UI/btnRemove";
import useSearchParamsCustom from "../../hooks/useSearchParams";

export default function ListProductsAdmin() {
  const [paramsDelete, setParamsDelete] = useState([]);
  const { params } = useSearchParamsCustom();

  const { data, isLoading } = useGetProductsQuery(params);
  const [removeProducts, { isLoading: isLoadingDelete }] =
    useDeletedProductsMutation();

  const handleAddItem = (item) =>
    setParamsDelete((params) => [...params, item]);
  const handleRemoveItem = (item) =>
    setParamsDelete((params) => params.filter((el) => item !== el));

  const handleRemoveProducts = () => removeProducts({ remove: paramsDelete });

  return (
    <div style={{ display: "flex" }}>
      <Sidebar>
        <BtnRemove onClick={handleRemoveProducts} loading={isLoadingDelete} />
      </Sidebar>
      <div style={{ width: "100%", height: "100vh", overflow: "auto" }}>
        {isLoading ? (
          <h1>loading</h1>
        ) : (
          data?.products.map((e) => (
            <ListRemove
              data={e}
              key={e._id}
              addItem={handleAddItem}
              removeItem={handleRemoveItem}
            />
          ))
        )}
      </div>
    </div>
  );
}
