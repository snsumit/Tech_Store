import { getDataFromLS } from "./getDataFromLS";

export const updateCartValueBillData = () =>{

const productSubTotal = document.querySelector(".subTotalPrice");
const productTotal = document.querySelector(".TotalPrice")
let localStorageProduct = getDataFromLS();
let intitialValue = 0 

let TotalSumForBill = localStorageProduct.reduce((accum , currProd) =>{
      return accum + currProd.price 
},intitialValue)
TotalSumForBill = Number(TotalSumForBill.toFixed(2))

productSubTotal.innerText = TotalSumForBill ;
productTotal.innerText = `₹${TotalSumForBill + 100}`;
}