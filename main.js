import product from "./api/product.json"

import { homeQuantityToggle } from './homeQuantityToggle';

import { addToCart } from './addToCart';

const toggle = document.querySelectorAll(".icon");
const sidebar = document.querySelector(".sidebar")
const mainContent = document.querySelector(".main-content");
const aboutContent = document.querySelector(".about-content")
const aboutBody = document.querySelector(".about-body")
const aboutInfo = document.querySelector(".about-info")

const productContainer = document.querySelector(".productContainer");
const productTemplate = document.querySelector(".productTemplate");
const productSection = document.querySelector(".product-section");

const newArrival = document.querySelector(".newArrivalProduct")

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

    product.forEach((curProd) => {

        const { id, name, brand, price, category, description, image, stock } = curProd
    
    
        let productClone = document.importNode(productTemplate.content, true);
    
        productClone.querySelector(".cardWrapper").setAttribute("id",`card${id}`)
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productimage").src = image
        productClone.querySelector(".product-title").textContent = name;
        productClone.querySelector(".product-description").textContent = description
        productClone.querySelector(".productDiscountPrice").textContent = `₹${price}`;
        productClone.querySelector(".productOrignalPrice").textContent = `₹${price * 4}`
        productClone.querySelector(".productCount").textContent = stock
    
       productClone.querySelector(".QuantityDecision").addEventListener('click',(event)=>{
         homeQuantityToggle(event,id,stock);
       })
    
       productClone.querySelector(".addToCart").addEventListener('click',(event)=>{
            addToCart(event,id,stock);
       })
      
    
    
        productContainer.append(productClone)
    
    })
    
    









