/** @format */
import ListProducts from "../modules/listProducts";
import Sidebar from "../modules/sidebar";
import Basket from "../modules/basket";
import Auth from "../modules/auth";

export default function MainPage() {
  return (
    <>
      <Basket />
      <Auth />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <ListProducts />
      </div>
    </>
  );
}
