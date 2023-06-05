import React from "react";
import ItemCard from "./ItemCard";

function ItemList({ featuredClothes }) {
  return (
    <div className="d-flex p-2">
      {featuredClothes &&
        featuredClothes.map((item, index) => {
          return (
            <ItemCard
              key={index}
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          );
        })}
    </div>
  );
}

export default ItemList;
