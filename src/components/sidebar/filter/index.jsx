/** @format */

import { useDispatch } from "react-redux";
import { setOptions } from "../../../redux/filter/slice";

import Autocomplete from "../../../UI/avtocomplete";

export default function Filter({ data = [] }) {
  const dispatch = useDispatch();

  const typeOptions = [...new Set(data.map((e, i) => e.type))];
  const brandOptions = [...new Set(data.map((e, i) => e.brand))];

  const hendleChandeType = (value) => dispatch(setOptions({ type: value }));
  const hendleChandeBrand = (value) => dispatch(setOptions({ brand: value }));

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
