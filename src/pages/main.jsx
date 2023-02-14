/** @format */
import ListProducts from "../modules/listProducts";
import Sidebar from "../modules/sidebar";
import Basket from "../modules/basket";
import Header from "../modules/header";

export default function Main() {
  return (
    <>
      <Header />
      <Basket />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <ListProducts />
      </div>
    </>
  );
}
