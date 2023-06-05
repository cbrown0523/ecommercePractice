let allProducts = require("../assets/products.json");

export default function useProducts() {
  const getProductsByDepartment = (department) => {
    return allProducts.filter((item) => {
      return department === item.department;
    });
  };
  const getFeaturedProducts = () => {
    return allProducts.filter((item) => {
      return item.isFeatured;
    });
  };
  const getAllProducts = () => {
    return allProducts;
  };
  return { getProductsByDepartment, getFeaturedProducts, getAllProducts };
}
