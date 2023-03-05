/** @format */

import { useSelector } from "react-redux";
import { useGetProductsOptionsQuery } from "../../services/fetch";

import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import SliderPrice from "../../components/sidebar/sliderPrice";
import Options from "../../components/sidebar/options";
import AccordingList from "../../components/sidebar/accordingList";

import s from "./style.module.css";

export default function Sidebar({ children }) {
  const isOpen = useSelector((store) => store.button.menu);

  const { data, isLoading } = useGetProductsOptionsQuery();

  return (
    <Slide
      direction="right"
      in={isOpen && !isLoading}
      mountOnEnter
      unmountOnExit
    >
      {
        <Paper className={s.container}>
          {isLoading ? (
            <div>loading</div>
          ) : (
            <div>
              <AccordingList title="type" data={data?.type} />
              <AccordingList title="brand" data={data?.brand} />
              <SliderPrice price={data?.price} />
              <Options />
              <div className={s.children}>{children}</div>
            </div>
          )}
        </Paper>
      }
    </Slide>
  );
}
