export const homeQuantityToggle = (event,id,stock) =>{
    const currentCardElement = document.querySelector(`#card${id}`);
     
    let productQuantity = currentCardElement.querySelector(".countUpdate")
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1
    
    
    if((event.target.className === "cartIncre")){
       if(quantity < stock){
         quantity +=1;
       }
    }
    
    if((event.target.className === "cartDecre")){
         if(quantity > 1){
             quantity -=1;
         }
    }
    
    productQuantity.innerText = quantity;
    productQuantity.setAttribute("data-quantity",quantity.toString());
    
}