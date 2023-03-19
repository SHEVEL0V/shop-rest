/** @format */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { setDesc } from "./redux/options/slice";
import { router } from "./router";
import { useGetProductsDescQuery } from "./services/fetch";

function App() {
  const dispatch = useDispatch();

  const { data, isSuccess } = useGetProductsDescQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setDesc(data));
    }
  }, [data, dispatch, isSuccess]);

  return <RouterProvider router={router} />;
}

export default App;
