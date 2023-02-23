/** @format */

export default function useCheckBox(setOptions) {
  const addId = (item) => setOptions((params) => [...params, item]);
  const removeId = (item) =>
    setOptions((params) => params.filter((el) => item !== el));

  return { addId, removeId };
}
