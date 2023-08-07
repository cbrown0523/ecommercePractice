import React from "react";
import ItemCard from "./ItemCard";
//featuredClothes prop is the products data
function ItemList({ featuredClothes }) {
  return (
    <>
    <div className="d-flex p-2">
   {featuredClothes &&
        featuredClothes.map((item, index) => {
          return <ItemCard key={index} item={item} />;
        })}
    </div> 
    </>
  );
}

export default ItemList;
