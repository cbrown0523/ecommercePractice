import React from "react";
import { useParams } from "react-router";
let data = require("../assets/products.json");
function Product() {
  const { id } = useParams();
  const productDetails = data.filter((item) => {
    return id === item.id;
  })[0];
  console.log(productDetails);
  return <div></div>;
}

export default Product;
