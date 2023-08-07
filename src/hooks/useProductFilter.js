let allProducts = require("../assets/products.json");
export default useProductFilter = ()=> {
  //price:price is value of what to be filtered
    //comparator : 
    const filterByPriceGreater = (price, comparator) => {
        const greaterThan = allProducts.filter(product => {
            return product.price > price
        })
        const lessThan = allProducts.filter(product => {
            return product.price < price
        })
        const equalTo =  allProducts.filter(product => {
            return product.price === price
        })
         
        switch (comparator ) {
            case "greater": return greaterThan;
            case "lessThan": return lessThan;
            case "equalTo": return equalTo;

        }
    }
    return { filterByPrice }
}

