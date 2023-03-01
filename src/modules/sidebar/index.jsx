/** @format */

import { useSelector } from "react-redux";
import { useGetProductsOptionsQuery } from "../../services/fetch";

import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";

import SliderPrice from "../../components/sidebar/sliderPrice";
import Options from "../../components/sidebar/options";

import s from "./style.module.css";
import PriceSlider from "../../components/sidebar/sliderPrice";
import CardOptions from "../../components/sidebar/accordingList";
import { useState } from "react";
import useCheckBox from "../../hooks/useCheckBox";
import useSearchParamsCustom from "../../hooks/useSearchParams";
import BtnLoading from "../../UI/btnLoading";

export default function Sidebar({ children }) {
  const [typeSt, setType] = useState([]);
  const [brandSt, setBrand] = useState([]);
  const isOpen = useSelector((store) => store.button.menu);

  const handleValueParams = (value) =>
    value.length !== 0 ? value.join("-") : [];

  const brand = handleValueParams(brandSt);
  const type = handleValueParams(typeSt);

  const handelSearch = () => setParams({ brand, type });

  const { setParams } = useSearchParamsCustom();
  const { data, isLoading } = useGetProductsOptionsQuery();

  const { handleCheckBoxArray: changeType } = useCheckBox(setType);
  const { handleCheckBoxArray: changeBrand } = useCheckBox(setBrand);

  return (
    <Slide
      direction="right"
      in={isOpen && !isLoading}
      mountOnEnter
      unmountOnExit
    >
      {
        <Paper>
          {isLoading ? (
            <div className={s.container}>loading</div>
          ) : (
            <div className={s.container}>
              <CardOptions
                title="type"
                data={data?.type}
                onChange={changeType}
              />
              <CardOptions
                title="brand"
                data={data?.brand}
                onChange={changeBrand}
              />

              <SliderPrice price={data?.price} search={handelSearch} />
              <BtnLoading onClick={handelSearch}>search</BtnLoading>
              <Options />
              <div className={s.children}>{children}</div>
            </div>
          )}
        </Paper>
      }
    </Slide>
  );
}
