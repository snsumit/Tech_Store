import { updateCartValue } from "./updateCartValue";

export const getDataFromLS = () =>{
  let cartProduct = localStorage.getItem("cartProductLs");
  if(!cartProduct){
    return [];
  }
  cartProduct = JSON.parse(cartProduct)
  updateCartValue(cartProduct);
  return cartProduct;

}