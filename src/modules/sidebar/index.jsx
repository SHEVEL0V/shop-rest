/** @format */
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import SliderPrice from "../../components/sidebar/sliderPrice";
import AccordingList from "../../components/sidebar/accordingList";
import useSearchParamsCustom from "../../hooks/useSearchParams";

import s from "./style.module.css";
import Sort from "../../components/sidebar/sort";
import Options from "../../components/sidebar/options";

export default function Sidebar({ children, options, isLoading }) {
  const isOpen = useSelector((store) => store.button.menu);
  const { setParams } = useSearchParamsCustom();

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
          }}
        >
          {isLoading ? (
            <div>loading</div>
          ) : (
            <div>
              <AccordingList title="type" data={options?.type} />
              <Sort onSort={setParams} />
              <SliderPrice price={options?.price} />
              <AccordingList title="brand" data={options?.brand} />
              <Options options={options?.params} />
              <div className={s.children}>{children}</div>
            </div>
          )}
        </Paper>
      }
    </Slide>
  );
}
