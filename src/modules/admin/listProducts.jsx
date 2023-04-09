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

import s from "./style.module.css";
import ListContainer from "../../components/listContainer";

export default function ListProductsAdmin() {
  const { params } = useSearchParamsCustom();
  const [options, setOptions] = useState([]);
  const disabled = options.length === 0;

  const { handleCheckBoxArray } = useCheckBox(setOptions);

  const { data, isLoading } = useGetProductsQuery(params);
  const [removeProducts, { isLoading: isLoadingDelete }] =
    useDeletedProductsMutation();

  const handleRemoveProducts = () => removeProducts({ options });

  return (
    <div className={s.containerList}>
      <Sidebar options={data?.desc} isLoading={isLoading}>
        <Btn
          disabled={disabled}
          onClick={handleRemoveProducts}
          loading={isLoadingDelete}
        >
          remove
        </Btn>
      </Sidebar>
      <ListContainer isLoading={isLoading} count={data?.count}>
        {data?.results.map((e) => (
          <ListRemove
            data={e}
            key={e._id}
            handleCheckBox={handleCheckBoxArray}
          />
        ))}
      </ListContainer>
    </div>
  );
}
