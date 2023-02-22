/** @format */

import { Outlet } from "react-router-dom";
import AppBarAdmin from "../components/admin/appBar";

export default function Admin() {
  return (
    <div>
      <AppBarAdmin />
      <Outlet />
    </div>
  );
}
