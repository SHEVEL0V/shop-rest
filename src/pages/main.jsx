/** @format */
import ListProducts from "../modules/listProducts";
import Sidebar from "../modules/sidebar";
import Basket from "../modules/basket";

export default function Main() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <ListProducts />
      <Basket />
    </div>
  );
}
