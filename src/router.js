/** @format */

import { createBrowserRouter } from "react-router-dom";
import AddProduct from "./modules/admin/addProduct";
import Orders from "./modules/admin/orders";
import ListProductsAdmin from "./modules/admin/listProducts";
import Admin from "./pages/admin";
import Main from "./pages/main";
import Product from "./pages/product";
import UpdateProducts from "./modules/admin/updateProducts";

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
    children: [
      { path: "add", element: <AddProduct /> },
      { path: "remove", element: <ListProductsAdmin /> },
      { path: "orders", element: <Orders /> },
      { path: "update/:id", element: <UpdateProducts /> },
    ],
  },
]);
