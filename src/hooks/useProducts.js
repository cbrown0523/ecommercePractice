let allProducts = require("../assets/products.json");

export default function useProducts() {
  const getProductsByDepartment = (department) => {
    return allProducts.filter((item) => {
      return department === item.department;
    });
  };
  const getSaleProducts = () => {
    return allProducts.filter((item) => {
      return item.isOnSale;
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
  const getProductById = (id) => {
    return allProducts.filter((item) => {
      return id === item.id;
    })[0];
  };
  return {
    getProductsByDepartment,
    getFeaturedProducts,
    getAllProducts,
    getSaleProducts,
    getProductById,
  };
}
