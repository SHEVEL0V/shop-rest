/** @format */

import React from "react";
import Pagination from "@mui/material/Pagination";

import s from "./style.module.css";
import useSearchParamsCustom from "../../hooks/useSearchParams";

export default function PaginationItem({ count = 1 }) {
  const limit = 10;
  const countPage = Math.ceil(count / limit);

  const { setParams } = useSearchParamsCustom();

  const handleChange = (event, value) => {
    setParams({ page: value });
  };
  return (
    <div className={s.container}>
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        count={countPage}
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
}
