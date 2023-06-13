import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import useProducts from "../hooks/useProducts";
function Men() {
  const { getProductsByDepartment } = useProducts();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getProductsByDepartment("men"));
  }, []);

  return (
    <div className="p-5">
      <ItemList featuredClothes={data} />
    </div>
  );
}

export default Men;
