import { getDataFromLS } from "./getDataFromLS";

import { updateCartValueBillData } from "./updateCartValueBillData";

export const cartIncrementDecrement = (event,id,stock,price) =>{
    const currentCardElement = document.querySelector(`#card${id}`);
    let productQuantity = currentCardElement.querySelector(".countUpdate")
    let productPrice = currentCardElement.querySelector(".productDiscountPrice")
    let cartProduct = getDataFromLS();
    let existingProduct = cartProduct.find((currProd) =>{
        return currProd.id === id;
    })
    let quantity = 1;
    let localStoragePrice = 0;
    if(existingProduct){
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price;
    }else{
        localStoragePrice = price;
        price = price;
    }
    if((event.target.className === "cartIncre")){
        if(quantity < stock){
          quantity +=1;
          
    }else if(quantity === stock){
         quantity = stock
         localStoragePrice = price * stock;
        }
     }
    
    if((event.target.className === "cartDecre")){
        if(quantity > 1){
            quantity -=1;
        }
    }
    localStoragePrice = quantity * price;
        localStoragePrice = Number( localStoragePrice.toFixed(2))
        console.log(localStoragePrice)
        let updateCartValue = {id ,price:localStoragePrice,quantity} 
        updateCartValue = cartProduct.map((currPord) =>{
             return (currPord.id === id) ? updateCartValue : currPord; 
        })
        localStorage.setItem("cartProductLs",JSON.stringify(updateCartValue))
        productQuantity.innerText = quantity;
        productPrice.innerText = localStoragePrice;
        updateCartValueBillData();
}

