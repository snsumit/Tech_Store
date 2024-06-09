import { getDataFromLS } from "./getDataFromLS";
import { updateCartValue } from "./updateCartValue";
import { updateCartValueBillData } from "./updateCartValueBillData";
import { showToast } from "./showToast";
export const removeFromCart = (id) =>{
    let cartProduct =  getDataFromLS(); 
    const currentCardElement = document.querySelector(`#card${id}`);

    console.log(currentCardElement)
    console.log(cartProduct)

    cartProduct = cartProduct.filter((currProd) => currProd.id !== id)

    console.log(cartProduct)

    
    if(currentCardElement){
        currentCardElement.remove();
        showToast("delete",id);
    }


    localStorage.setItem("cartProductLs",JSON.stringify(cartProduct))
    updateCartValue(cartProduct)
    updateCartValueBillData();
}