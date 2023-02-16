/** @format */

import { createBrowserRouter } from "react-router-dom";
import Admin from "./modules/admin";
import Main from "./pages/main";
import Product from "./pages/product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: ":id",
    element: <Product />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);
