import React, { useState, useEffect } from "react";
import useProducts from "../hooks/useProducts";
import ItemList from "../components/ItemList";

function Sale() {
  const { getSaleProducts } = useProducts();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getSaleProducts(true));
  }, []);
  return (
    <div className="p-5">
      <ItemList featuredClothes={data} />
    </div>
  );
}

export default Sale;
