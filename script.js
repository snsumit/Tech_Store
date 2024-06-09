
import products from "./api/product.json"
import { cartIncrementDecrement } from "./cartIncrementDecrement";

import { getDataFromLS } from "./getDataFromLS";
import { fetchDataFromLS } from "./fetchDataFromLS";
import { removeFromCart } from "./removeFromCart";
import { updateCartValueBillData } from "./updateCartValueBillData";

const toggle = document.querySelectorAll(".icon");
const sidebar = document.querySelector(".sidebar")
const mainContent = document.querySelector(".main-content");
const aboutContent = document.querySelector(".about-content")
const aboutBody = document.querySelector(".about-body")
const aboutInfo = document.querySelector(".about-info")

toggle.forEach((btn) => {
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("open")
        mainContent.classList.toggle("display-dynamic")
        aboutContent.classList.toggle("display-dynamic2")
        aboutBody.classList.toggle("display-dynamic3")
        aboutInfo.classList.toggle('displayDynamic')
        productSection.classList.toggle("displayDynamic1")
        productContainer.classList.toggle("displayDynamic2")
        newArrival.classList.toggle("displayDynamic4")

    })
})

const productContainerElement = document.querySelector(".productElementContainer");
const productTemplateElement = document.querySelector(".ProductCartTemplate")

const cartProduct =  getDataFromLS(); 



let cartProducts = products.filter((currPro)=>{
    return cartProduct.some((currElem)=>{
      return  currElem.id === currPro.id 
    })
})


const showCartProducts = () =>{
    cartProducts.forEach((product) =>{
        const { id, name, brand, price, category, description, image, stock } = product
    
       
   
       
        let productClone = document.importNode(productTemplateElement.content ,true);
        let lsData = fetchDataFromLS(id,price)

        let productQuantity = productClone.querySelector(".countUpdate")
   
        productClone.querySelector(".cardWrapper").setAttribute("id",`card${id}`)
        productClone.querySelector(".category").textContent = category
        productClone.querySelector(".productimage").src = image
        productClone.querySelector(".product-title").textContent = name;
        productClone.querySelector(".productDiscountPrice").textContent = lsData.price;
        
        
       productQuantity.innerText = lsData.quantity

       productClone.querySelector(".QuantityDecision").addEventListener("click",(event)=>{
            cartIncrementDecrement(event,id,stock,price)
       })
        
       
       productClone.querySelector(".removeFromCart").addEventListener('click',(event)=>{
         removeFromCart(id);
       })

       productContainerElement.append(productClone)
    
    })
    
        
}

showCartProducts();

updateCartValueBillData()
