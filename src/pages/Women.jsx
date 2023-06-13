import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import useProducts from "../hooks/useProducts";
function Women() {
  const { getProductsByDepartment } = useProducts();

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getProductsByDepartment("women"));
  }, []);
  return (
    <div className="p-5">
      <ItemList featuredClothes={data} />
    </div>
  );
}

export default Women;
