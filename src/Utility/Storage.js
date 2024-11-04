const getAllProduct = () =>{
    const allProducts = localStorage.getItem('cart')
   

    if(allProducts){
        const cart = JSON.parse(allProducts)
        return cart;
    }
    else{
        return [];
    }
}

const addProduct = product =>{
   const cart = getAllProduct();
   const isExist = cart.find(item => item.product_id==product.product_id)
   if(isExist) return;
   
   cart.push(product);
   localStorage.setItem('cart', JSON.stringify(cart));
   
}

const removeProduct = id =>{
    const cart = getAllProduct();
    const remaining = cart.filter(product=> product.product_id != id)
    localStorage.setItem('cart', JSON.stringify(remaining));
}
export {addProduct, getAllProduct,removeProduct};