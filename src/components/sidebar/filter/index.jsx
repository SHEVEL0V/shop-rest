/** @format */
import useSearchParamsCustom from "../../../hooks/useSearchParams";

import Autocomplete from "../../../UI/autocomplete";

export default function Filter({ options }) {
  const { type, brand } = options;
  const { setParams } = useSearchParamsCustom();

  const handleChangeType = (value) =>
    setParams(value ? { type: value } : { type: "" });
  const handleChangeBrand = (value) =>
    setParams(value ? { brand: value } : { brand: "" });

  return (
    <div>
      <Autocomplete options={type} name={"type"} onChange={handleChangeType} />
      <Autocomplete
        options={brand}
        name={"brand"}
        onChange={handleChangeBrand}
      />
    </div>
  );
}
