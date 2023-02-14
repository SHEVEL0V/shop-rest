/** @format */
import { RouterProvider } from "react-router-dom";
import Footer from "./components/footer";
import { router } from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
