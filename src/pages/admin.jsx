/** @format */

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import MainPage from "./main";

export default function AdminPage() {
  const isAuthAdmin = useSelector((s) => s.auth?.user?.role === "admin");

  return <>{isAuthAdmin ? <Outlet /> : <MainPage />}</>;
}
