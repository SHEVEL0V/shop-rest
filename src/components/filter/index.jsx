/** @format */

import { useDispatch } from "react-redux";
import { setBrand, setType } from "../../redux/filter/slice";

import { useGetProductsQuery } from "../../services/fetch";
import Autocomplete from "../../UI/avtocomplete";

export default function Filter() {
  const dispatch = useDispatch();

  const { data = [] } = useGetProductsQuery();
  const typeOptions = [...new Set(data.map((e, i) => e.type))];
  const brandOptions = [...new Set(data.map((e, i) => e.brand))];

  const hendleChandeType = (value) => dispatch(setType(value));
  const hendleChandeBrand = (value) => dispatch(setBrand(value));

  return (
    <div>
      <Autocomplete
        options={typeOptions}
        name={"type"}
        onChange={hendleChandeType}
      />
      <Autocomplete
        options={brandOptions}
        name={"brand"}
        onChange={hendleChandeBrand}
      />
    </div>
  );
}
