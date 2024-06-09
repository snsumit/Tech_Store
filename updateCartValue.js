export const updateCartValue = (cartArray) =>{
    const cart =  document.querySelector(".cart");
    console.log(cartArray.length)
    return cart.innerHTML = `<i class='bx bx-cart '> ${cartArray.length}</i>` 
} 