import React from "react";
import ItemList from "../components/ItemList";

function Sale() {
  const saleClothing = [
    { name: " hat ", description: "knit wool", price: "$19.00", image: "" },
    { name: " socks", description: "white 6 pack", price: "$4.00", image: "" },
    {
      name: " pants",
      description: "jean denim",
      price: "$4.00",
      image: "",
    },
  ];
  return (
    <div className="p-5">
      <ItemList featuredClothes={saleClothing} />
    </div>
  );
}

export default Sale;
