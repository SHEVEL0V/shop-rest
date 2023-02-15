/** @format */

import { createBrowserRouter } from "react-router-dom";
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
]);
