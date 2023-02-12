/** @format */
import { RouterProvider } from "react-router-dom";
import Header from "./modules/header";
import { router } from "./router";

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
