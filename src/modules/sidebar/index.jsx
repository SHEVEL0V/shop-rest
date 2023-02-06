/** @format */
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../services/fetch";

import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";

import SliderPrice from "../../components/sidebar/sliderPrice";
import Filter from "../../components/sidebar/filter";

import s from "./style.module.css";
import OptonsCard from "../../components/sidebar/optionsCard";

export default function Sidebar() {
  const isOpen = useSelector((store) => store.button.menu);
  const { data } = useGetProductsQuery();

  const products = data?.products || [];
  const maxPrice = data?.maxPrice || [];

  return (
    <Slide direction="right" in={isOpen} mountOnEnter unmountOnExit>
      <Paper>
        <div className={s.container}>
          <Filter data={products} />
          <SliderPrice maxPrice={maxPrice} />
          <OptonsCard />
        </div>
      </Paper>
    </Slide>
  );
}
