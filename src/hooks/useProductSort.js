let allProducts = require("../assets/products.json");
export default function useProductSort() {
  //sorting products by different attributes
  //sorting attributes  
    // price descending
    const sortByPriceDescending = (data) => {         
        data.sort((a , b) => {   
          return +b.price - (+a.price) 
        })
       
        return data;  
    }
    // price ascending
    const sortByPriceAscending = (data) => {     
         console.log("ascending" , data)
       //TODO: implement function
       data.sort((a, b) => {
        return +a.price - (+b.price )
      })
      
      return data;
    }
    //department
    const sortByDepartment  = (data)=>{
       //TODO: implement function
      data.sort((a , b) => a.department < b.department ? -1 : a.department > b.department ? 1 : 0)
       console.log("department " + data.department)
    }
  

    // name
    const sortByName = (data , sortType)=>{
      //TODO: implement function
      data.sort((a , b) => a.localeCompare(b))
      console.log("item name " + data.name)
      return data.department ;
    }
    


    return {sortByPriceDescending , sortByPriceAscending , sortByDepartment , sortByName }
  }