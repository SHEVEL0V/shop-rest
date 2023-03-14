/** @format */
import { useSelector } from "react-redux";
import { useGetProductsOptionsQuery } from "../../services/fetch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import SliderPrice from "../../components/sidebar/sliderPrice";
import AccordingList from "../../components/sidebar/accordingList";
import useSearchParamsCustom from "../../hooks/useSearchParams";

import s from "./style.module.css";
import Sort from "../../components/sidebar/sort";

export default function Sidebar({ children }) {
  const isOpen = useSelector((store) => store.button.menu);
  const { setParams, getParams } = useSearchParamsCustom();

  const { data, isLoading } = useGetProductsOptionsQuery();

  return (
    <Slide
      direction="right"
      in={isOpen && !isLoading}
      mountOnEnter
      unmountOnExit
    >
      {
        <Paper
          className={s.container}
          sx={{
            boxShadow: "inset -3px -3px 29px -15px rgba(67, 67, 71, 1)",
            height: "100%",
          }}
        >
          {isLoading ? (
            <div>loading</div>
          ) : (
            <div>
              <AccordingList
                title="type"
                data={data?.type}
                setParams={setParams}
                getParams={getParams}
              />
              <Sort onSort={setParams} />
              <SliderPrice price={data?.price} />
              <AccordingList
                title="brand"
                data={data?.brand}
                setParams={setParams}
                getParams={getParams}
              />
              <div className={s.children}>{children}</div>
            </div>
          )}
        </Paper>
      }
    </Slide>
  );
}
