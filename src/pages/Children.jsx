import React from "react";
import ItemList from "../components/ItemList";

function Children() {
  const childrenClothing = [
    {
      id: "1",
      name: "baby hat ",
      description: "knit wool",
      price: "$9.00",
      image: "",
    },
    {
      id: "2",
      name: " socks",
      description: "white 6 pack",
      price: "$4.00",
      image: "",
    },
    {
      id: "3",
      name: " shorts",
      description: "pink flamingos",
      price: "$14.00",
      image: "",
    },
    {
      id: "4",
      name: " shirt",
      description: "blue short sleeve",
      price: "$5.90",
      image: "",
    },
  ];
  return (
    <div className="p-5">
      <ItemList featuredClothes={childrenClothing} />
    </div>
  );
}

export default Children;
