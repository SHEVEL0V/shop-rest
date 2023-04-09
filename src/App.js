/** @format */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { setDesc } from "./redux/options/slice";
import { router } from "./router";
import { useGetProductsDescQuery } from "./services/fetch";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  const dispatch = useDispatch();

  const { data, isSuccess } = useGetProductsDescQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setDesc(data));
    }
  }, [data, dispatch, isSuccess]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
