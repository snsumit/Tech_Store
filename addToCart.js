import { getDataFromLS } from "./getDataFromLS";
import { showToast } from "./showToast";

import { updateCartValue } from "./updateCartValue";

getDataFromLS();
export  const addToCart = (event,id,stock) => {
 const currentCardElement = document.querySelector(`#card${id}`);
 let arrayforLocalStorage = getDataFromLS();

 
 
 let quantity = currentCardElement.querySelector(".countUpdate").innerText;
 let price = currentCardElement.querySelector(".productDiscountPrice").innerText;

 price =  price.replace("₹","")
 price = Number(price * quantity)
 quantity = Number(quantity);


 let existingProduct = arrayforLocalStorage.find((currPord)=>{
    return (currPord.id === id);  
  
 })
 if(existingProduct && quantity > 1){
   price = price * existingProduct.quantity + quantity;
   quantity = Number(existingProduct.quantity + quantity);
   let updateCartValue = {id ,price ,quantity} 
   
   updateCartValue = arrayforLocalStorage.map((currPord) =>{
        return (currPord.id === id) ? updateCartValue :currPord; 
   })
   localStorage.setItem("cartProductLs",JSON.stringify(updateCartValue))
 }

 if(existingProduct){
    return false;
 }




 

 arrayforLocalStorage.push({id ,price ,quantity});

 localStorage.setItem("cartProductLs",JSON.stringify(arrayforLocalStorage))

 updateCartValue(arrayforLocalStorage);

 showToast("add",id)

}