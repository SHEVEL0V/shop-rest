/** @format */
import { Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CardBasket from "../../components/cardBasket";
import { setButtonBasket } from "../../redux/buttton/slice";
import { useGetBasketQuery } from "../../services/fetch";
import Button from "@mui/material/Button";
import s from "./style.module.css";
import useMedia from "../../hooks/useMedia";

export default function Basket() {
  const dispatch = useDispatch();

  const isOpenBasket = useSelector((store) => store.button.basket);
  const { isLoading: isLoadingGet, data = [] } = useGetBasketQuery();

  const sumPrice = data
    .map(({ qty, product }) => qty * product.price)
    .reduce((acc, v) => acc + v, 0);

  const { boolean } = useMedia(850);

  return (
    <Modal
      open={isOpenBasket}
      onClose={() => dispatch(setButtonBasket())}
      sx={{ paddingTop: 10, paddingInline: boolean ? 40 : 2 }}
      closeAfterTransition
    >
      <div className={s.container}>
        {isLoadingGet ||
          data.map((list) => <CardBasket key={list._id} data={list} />)}
        <div className={s.flex}>
          <b className={s.prise}>{sumPrice}</b>
          <Button
            sx={{ width: 200 }}
            color="success"
            variant="contained"
            onClick={() => console.log("To order")}
          >
            To order
          </Button>
        </div>
      </div>
    </Modal>
  );
}
