let allProducts = require("../assets/products.json");
export default function useProductSort() {
  //sorting products by different attributes
  //sorting attributes  
    // price descending
    const sortByPriceDescending = (data) => {         
      console.log(" descending" , data)
        data.sort((a , b) => {   
          return +b.price - (+a.price) 
        })
        return data;  
    }
    // price ascending
    const sortByPriceAscending = (data) => {     
         console.log(" ascending" , data)
       //TODO: implement function
       data.sort((b , a) => {
        console.log(a.price +" "+ b.price)
        return +a.price - (+b.price )
      })
      
      return data;
    }
    //department
    const sortByDepartment  = (data, sortType)=>{
       //TODO: implement function
       return [];
    }
    
    //is featured

    // name
    const sortByName = (data , sortType)=>{
      //TODO: implement function
      return [];
    }
    


    return {sortByPriceDescending , sortByPriceAscending , sortByDepartment , sortByName   }    
}
