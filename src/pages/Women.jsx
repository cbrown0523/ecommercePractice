import React from "react";
import ItemList from "../components/ItemList";

function Women() {
  const womenClothing = [
    {
      name: "purse",
      description: "leather with beads",
      price: "$45.00",
      image: "",
    },
    { name: " socks", description: "white 6 pack", price: "$8.00", image: "" },
    {
      name: "dress",
      description: "ruffle yellow linen",
      price: "$174.00",
      image: "",
    },
    {
      name: "coat",
      description: " rain coat silk sleeve",
      price: "$588.90",
      image: "",
    },
  ];
  return (
    <div className="p-5">
      <ItemList featuredClothes={womenClothing} />
    </div>
  );
}

export default Women;
