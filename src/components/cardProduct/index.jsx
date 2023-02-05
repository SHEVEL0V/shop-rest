/** @format */

import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import s from "./style.module.css";

export default function CardProduct({ data }) {
  const { name, price, rating, img, desc } = data;
  const [rat, setRat] = useState(rating);

  return (
    <div className={s.container}>
      <img src={img} alt="logo" className={s.img} />
      <div>
        name: <span>{name}</span>
      </div>
      <div>
        <Rating
          name="simple-controlled"
          value={rat}
          onChange={(e, newValue) => setRat(newValue)}
        />
        <div className={s.prise}>
          price: <span>{price}</span> grn
        </div>
        <Button variant="contained">Add to basket</Button>
      </div>

      <ul>
        <li>
          desc<span>{desc}</span>
        </li>
      </ul>
    </div>
  );
}
