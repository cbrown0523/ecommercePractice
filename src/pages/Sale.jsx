import React, { useState, useEffect } from "react";
import useProducts from "../hooks/useProducts";
import ItemList from "../components/ItemList";
import useProductSort from "../hooks/useProductSort";
import Button from 'react-bootstrap/Button';

//state is anything that when changed causes a rerender
//minimize use of state and only use it when managing data in the component and need to modify it
function Sale() {
  const {sortByPriceDescending , sortByPriceAscending} = useProductSort();
  
  const { getSaleProducts } = useProducts();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData((value)=>[...value ]);
    setData(getSaleProducts(true));
  }, []);

  return (
    <div className="p-5">
     <Button onClick={() => setData(()=>sortByPriceDescending([...data]))} variant="primary">Sort Descending</Button>
     <Button onClick={() => setData(()=>sortByPriceAscending([...data]))} variant="primary">Sort Ascending</Button>
    <Button variant="primary">Sort Department</Button>
    <Button variant="primary">Sort Name</Button>
      <ItemList featuredClothes={data} />
    </div>
  );
}

export default Sale;
