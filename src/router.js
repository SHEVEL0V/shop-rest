/** @format */

import { createBrowserRouter } from "react-router-dom";
import Orders from "./modules/admin/orders";
import ListProductsAdmin from "./modules/admin/listProducts";
import AdminPage from "./pages/admin";
import MainPage from "./pages/main";
import ProductPage from "./pages/product";
import UserPage from "./pages/user";
import Container from "./pages/container";
import UpdateProducts from "./modules/admin/updateProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
      {
        path: ":brand/:id",
        element: <ProductPage />,
      },
      {
        path: "admin",
        element: <AdminPage />,
        children: [
          { path: "add", element: <UpdateProducts boolean={false} /> },
          { path: "remove", element: <ListProductsAdmin /> },
          { path: "orders", element: <Orders /> },
          { path: "update/:id", element: <UpdateProducts boolean={true} /> },
        ],
      },
    ],
  },
]);
