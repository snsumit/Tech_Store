
export const showToast = (operation ,id) =>{
    let toast =  document.createElement("div")
   

    if(operation === "delete"){
        toast.textContent = `Product with id ${id} has remove`
    }else{
        toast.textContent = `Product with id ${id} has added`
    } 

       
    document.body.appendChild(toast);
    
   
}