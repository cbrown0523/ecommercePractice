let allProducts = require("../assets/products.json");
export default useProductFilter = ()=> {
  //price:price is value of what to be filtered
    //comparator : 
    const filterProducts = (price, comparator) => {
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
    return { filterByPriceGreater }
}

// custom hooks - hooks store business logic. You want the behavior of the function to be the same. 
//  components store display logic. You want the display look the same make a component
//verb tells what function doing , name specific