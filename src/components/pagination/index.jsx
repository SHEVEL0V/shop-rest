/** @format */

import React from "react";
import Pagination from "@mui/material/Pagination";
import Autocomplete from "../../UI/autocomplete";
import useSearchParamsCustom from "../../hooks/useSearchParams";

import s from "./style.module.css";

export default function PaginationItem({ count }) {
  const defaultLimit = "12";
  const optionsLimit = ["20", "50", "100", "200"];

  const { params, setParams } = useSearchParamsCustom();

  const page = Number(params.page) || 1;
  const limit = params.limit || defaultLimit;
  const countPagination = Math.ceil(count / limit) || 1;

  const handleChange = (_, page) => setParams({ page });

  const handlerChangeLimit = (limit) => setParams({ page: 1, limit });

  return (
    <div className={s.container}>
      <Pagination
        page={page}
        count={countPagination}
        color="primary"
        onChange={handleChange}
      />
      <Autocomplete
        size="small"
        name="limit"
        options={optionsLimit}
        onChange={handlerChangeLimit}
      />
    </div>
  );
}
