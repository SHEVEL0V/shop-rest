/** @format */
import Sidebar from "../components/sidebar";
import Card from "../components/card";

export default function Main() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
