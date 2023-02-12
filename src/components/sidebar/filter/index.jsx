/** @format */
import useSearchParamsCastome from "../../../hooks/useSearchParams";

import Autocomplete from "../../../UI/avtocomplete";

export default function Filter({ options }) {
  const { type, brand } = options;
  const { setParams } = useSearchParamsCastome();

  const hendleChandeType = (value) => setParams({ type: value });
  const hendleChandeBrand = (value) => setParams({ brand: value });

  return (
    <div>
      <Autocomplete options={type} name={"type"} onChange={hendleChandeType} />
      <Autocomplete
        options={brand}
        name={"brand"}
        onChange={hendleChandeBrand}
      />
    </div>
  );
}
