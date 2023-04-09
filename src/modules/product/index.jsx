/** @format */

import React from "react";
import { useGetProductsByIdQuery } from "../../services/fetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBasket } from "../../redux/basket/slice";
import useItemByBasket from "../../hooks/useItemByBasket";
import Loader from "../../components/loader";
import Button from "@mui/material/Button";

import s from "./style.module.css";

export default function Product() {
  const { id } = useParams();

  const { data, isLoading } = useGetProductsByIdQuery(id);
  const product = data || {};
  const dispatch = useDispatch();
  const { isDisable } = useItemByBasket(id);

  const { img, price, name, desc, params } = product;

  const handleAddProducts = () => dispatch(setBasket(product));

  return isLoading ? (
    <Loader />
  ) : (
    <div className={s.container}>
      <div className={s.itemContainer}>
        <img src={img} alt="logo" className={s.img} />
      </div>

      <div className={s.itemContainer}>
        <h2>{name}</h2>
        <div className={s.prise}>
          price: <span>{price}</span> UAH
        </div>
        <h5>Descriptions:</h5>
        <p>{desc}</p>
        <div>
          {params?.map((e, i) => (
            <div key={i}>
              <div style={{ display: "flex" }}>
                <div className={s.paramContainer}> {e.name}</div>
                <div className={s.paramContainer}>{e.value}</div>
              </div>
            </div>
          ))}
        </div>

        <Button
          sx={{ marginTop: "auto" }}
          onClick={handleAddProducts}
          color="secondary"
          disabled={isDisable()}
          variant="contained"
        >
          <span>{!isDisable() ? "Add to basket" : "item in the basket"}</span>
        </Button>
      </div>
    </div>
  );
}
