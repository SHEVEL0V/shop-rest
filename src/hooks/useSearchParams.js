/** @format */
import { useSearchParams } from "react-router-dom";

export default function useSearchParamsCustom() {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  const setParams = (obg) => setSearchParams({ ...params, ...obg });

  return { setParams, params };
}
