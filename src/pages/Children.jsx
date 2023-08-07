import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import useProducts from "../hooks/useProducts";
function Children() {
  const { getProductsByDepartment } = useProducts();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getProductsByDepartment("kid"));
  }, []);

  return (
    <div className="p-5">
      <ItemList featuredClothes={data} />
      {<h1></h1>}
    </div>
  );
}

export default Children;
