/** @format */

import React from "react";
import Autocomplete from "../../../UI/autocomplete";

export default function Sort({ onSort }) {
  const filter = [
    { label: "minPrice", value: "min" },
    { label: "maxPrice", value: "max" },
    { label: "newProduct", value: "new" },
    { label: "oldProduct", value: "old" },
  ];
  return (
    <Autocomplete
      options={filter}
      name="sort"
      onChange={(e) =>
        e !== null ? onSort({ sort: e.value }) : onSort({ sort: null })
      }
    />
  );
}
