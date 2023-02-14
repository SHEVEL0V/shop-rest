/** @format */

export default function useLocalStorage() {
  const setStorege = (key, value) =>
    window.localStorage.setItem(`${key}`, `${value}`);

  const getStorege = (key) => window.localStorage.getItem(`${key}`);

  return { setStorege, getStorege };
}
