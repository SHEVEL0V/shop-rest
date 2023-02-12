/** @format */
import { useSearchParams } from "react-router-dom";

export default function useSearchParamsCastome() {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  const setParams = (value) => setSearchParams({ ...params, ...value });

  return { setParams, params };
}
