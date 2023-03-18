/** @format */

import React, { useState } from "react";
import {
  useGetProductsQuery,
  useDeletedProductsMutation,
} from "../../services/fetch";
import ListRemove from "../../components/admin/listRemove";
import Sidebar from "../sidebar";
import Btn from "../../UI/btn";
import useSearchParamsCustom from "../../hooks/useSearchParams";
import useCheckBox from "../../hooks/useCheckBox";
import Pagination from "../../components/pagination";

import s from "./style.module.css";

export default function ListProductsAdmin() {
  const { params } = useSearchParamsCustom();
  const [options, setOptions] = useState([]);

  const { handleCheckBoxArray } = useCheckBox(setOptions);

  const { data, isLoading } = useGetProductsQuery(params);
  const [removeProducts, { isLoading: isLoadingDelete }] =
    useDeletedProductsMutation();

  const handleRemoveProducts = () => removeProducts({ options });

  return (
    <div style={{ display: "flex" }}>
      <Sidebar options={data?.desc} isLoading={isLoading}>
        <Btn onClick={handleRemoveProducts} loading={isLoadingDelete}>
          remove
        </Btn>
      </Sidebar>
      <div className={s.containerLists}>
        {isLoading ? (
          <h1>loading</h1>
        ) : (
          data?.results.map((e) => (
            <ListRemove
              data={e}
              key={e._id}
              handleCheckBox={handleCheckBoxArray}
            />
          ))
        )}
        <Pagination count={data?.desc?.count} />
      </div>
    </div>
  );
}
