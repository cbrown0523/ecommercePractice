import React from "react";
import HomeBanner from "../assets/bannerHome.jpg";
import ItemList from "../components/ItemList";
import useProducts from "../hooks/useProducts";
import { Button } from "react-bootstrap";
function Home() {
  const { getFeaturedProducts } = useProducts();
  return (
    <div>
    
      <img
        className="w-100 h-25 "
        src={HomeBanner}
        alt="a women is showing a selection of clothing in a store"
      />
      {/* <Button variant="outline-success">Sort</Button> */}
      <p className="p-4">Spring Collection</p> <br />
      Is Here
      <ItemList featuredClothes={getFeaturedProducts()} />
      {/* passing the return value from the function */}
     
    </div>
  );
}

export default Home;
