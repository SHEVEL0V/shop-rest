/** @format */
import SliderPrice from "../../components/sliderPrice";
import Filter from "../../components/filter";

import s from "./style.module.css";

export default function Sidebar() {
  return (
    <div className={s.container}>
      <Filter />
      <SliderPrice />
    </div>
  );
}
