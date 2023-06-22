import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useProducts from "../hooks/useProducts";
import Badge from 'react-bootstrap/Badge';


function Product() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { getProductById } = useProducts();
  useEffect(() => {
    setData(getProductById(id));
  }, []);

  console.log(data);
  return (
    <div>
      <h1>Result</h1>
      <h3>{data.name}</h3> <img src = {data.image}/>
      <h3>{data.description}</h3>
      <h3>{data.price}</h3>
     
    </div>
  );
}

export default Product;
