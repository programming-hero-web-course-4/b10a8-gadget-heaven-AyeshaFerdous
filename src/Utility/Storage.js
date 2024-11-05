const getAllCartProduct = () =>{
    const allProducts = localStorage.getItem('cart')
   

    if(allProducts){
        const cart = JSON.parse(allProducts)
        return cart;
    }
    else{
        return [];
    }
}

const addCartProduct = product =>{
   const cart = getAllCartProduct();
   const isExist = cart.find(item => item.product_id==product.product_id)
   if(isExist) return;
   
   cart.push(product);
   localStorage.setItem('cart', JSON.stringify(cart));
   
}

const removeCartProduct = id =>{
    const cart = getAllCartProduct();
    const remaining = cart.filter(product=> product.product_id != id)
    localStorage.setItem('cart', JSON.stringify(remaining));
}






const getAllWishlistProduct = () =>{
    const allProducts = localStorage.getItem('wishlist')
   

    if(allProducts){
        const wishlist = JSON.parse(allProducts)
        return wishlist;
    }
    else{
        return [];
    }
}

const addWishlistProduct = product =>{
   const wishlist = getAllWishlistProduct();
   const isExist = wishlist.find(item => item.product_id==product.product_id)
   if(isExist) return;
   
   wishlist.push(product);
   localStorage.setItem('wishlist', JSON.stringify(wishlist));
   
}

const removeWishlistProduct = id =>{
    const wishlist = getAllWishlistProduct();
    const remaining = wishlist.filter(product=> product.product_id != id)
    localStorage.setItem('wishlist', JSON.stringify(remaining));
}



export {addCartProduct, getAllCartProduct,removeCartProduct, getAllWishlistProduct, addWishlistProduct,removeWishlistProduct};