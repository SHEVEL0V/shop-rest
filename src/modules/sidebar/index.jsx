/** @format */
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetProductsOptionsQuery } from "../../services/fetch";
import ComboBox from "../../UI/autocomplete";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import SliderPrice from "../../components/sidebar/sliderPrice";
import Options from "../../components/sidebar/options";
import AccordingList from "../../components/sidebar/accordingList";
import useSearchParamsCustom from "../../hooks/useSearchParams";

import s from "./style.module.css";

export default function Sidebar({ children }) {
  // const [sort, setSort] = useState("");
  const isOpen = useSelector((store) => store.button.menu);
  const { setParams, getParams } = useSearchParamsCustom();

  const { data, isLoading } = useGetProductsOptionsQuery();

  const filter = ["minPrice", "maxPrice", "newProduct", "oldProduct"];

  const handleSort = (sort) => setParams({ sort });

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
              <ComboBox options={filter} name="sort" onChange={handleSort} />
              <AccordingList
                title="type"
                data={data?.type}
                setParams={setParams}
                getParams={getParams}
              />
              <AccordingList
                title="brand"
                data={data?.brand}
                setParams={setParams}
                getParams={getParams}
              />
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
