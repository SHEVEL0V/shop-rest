/** @format */

import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Autocomplete from "../../UI/autocomplete";
import useSearchParamsCustom from "../../hooks/useSearchParams";

import s from "./style.module.css";

export default function PaginationItem({ count }) {
  const defaultLimit = "9";
  const optionsLimit = ["20", "50", "100", "200"];

  const { params, setParams } = useSearchParamsCustom();

  const page = Number(params.page) || 1;
  const limit = params.limit || defaultLimit;
  const countPagination = Math.ceil(count / limit) || 1;

  const handleChange = (_, value) => setParams({ page: value });

  const handlerChangeLimit = (v) =>
    v !== null
      ? setParams({ limit: v, page: 1 })
      : setParams({ limit: defaultLimit });

  return (
    <div className={s.container}>
      <Pagination
        page={page}
        count={countPagination}
        color="primary"
        onChange={handleChange}
      />
      <Autocomplete
        value="none"
        size="small"
        name="limit"
        options={optionsLimit}
        onChange={handlerChangeLimit}
      />
    </div>
  );
}
