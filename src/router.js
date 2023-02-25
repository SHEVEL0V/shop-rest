/** @format */

import { createBrowserRouter } from "react-router-dom";
import AddProduct from "./modules/admin/addProduct";
import Orders from "./modules/admin/orders";
import ListProductsAdmin from "./modules/admin/listProducts";
import AdminPage from "./pages/admin";
import MainPage from "./pages/main";
import ProductPage from "./pages/product";
import UpdateProducts from "./modules/admin/updateProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: ":brand/:id",
    element: <ProductPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
    children: [
      { path: "add", element: <AddProduct /> },
      { path: "remove", element: <ListProductsAdmin /> },
      { path: "orders", element: <Orders /> },
      { path: "update/:id", element: <UpdateProducts /> },
    ],
  },
]);
