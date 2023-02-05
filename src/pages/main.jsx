/** @format */
import ListProducts from "../modules/listProducts";
import Sidebar from "../modules/sidebar";

export default function Main() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <ListProducts />
    </div>
  );
}
