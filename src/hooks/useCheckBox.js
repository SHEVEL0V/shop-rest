/** @format */

export default function useCheckBox(setOptions) {
  const addId = (item) => setOptions((params) => [...params, item]);

  const removeId = (item) =>
    setOptions((params) => params.filter((el) => item !== el));

  const handleCheckBox = (e) =>
    e.target.checked ? addId(e.target.name) : removeId(e.target.name);

  return { handleCheckBox };
}
