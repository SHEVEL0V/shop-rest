/** @format */

import { createBrowserRouter } from "react-router-dom";
import Orders from "./modules/admin/orders";
import ListProductsAdmin from "./modules/admin/listProducts";
import ListProducts from "./modules/list";
import Product from "./modules/product";
import UpdateUser from "./modules/user";
import Main from "./pages/main";
import UpdateProducts from "./modules/admin/updateProducts";
import PrivateRoute from "./helpers/privateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <ListProducts />,
      },
      {
        path: "user",
        element: <UpdateUser />,
      },
      {
        path: ":brand/:id",
        element: <Product />,
      },
      {
        path: "admin",
        element: <PrivateRoute />,
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
