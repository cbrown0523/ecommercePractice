import React from "react";
import ItemList from "../components/ItemList";
function Men() {
  const menClothing = [
    { name: " hat ", description: "knit wool", price: "$4.00", image: "" },
    { name: " socks", description: "white 6 pack", price: "$6.00", image: "" },
    {
      name: " shorts",
      description: "khaki",
      price: "$45.00",
      image: "",
    },
    {
      name: "button up shirt",
      description: "blue shirt with short sleeve",
      price: "$57.40",
      image: "",
    },
  ];
  return (
    <div className="p-5">
      <ItemList featuredClothes={menClothing} />
    </div>
  );
}

export default Men;
