
import React, { useEffect, useState } from 'react';
import {  getAllWishlistProduct, removeWishlistProduct} from '../Utility/Storage';
import ProductWishlist from './ProductWishlist';

const ProductWishlists = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const wishlist = getAllWishlistProduct();
        setProducts(wishlist)
    },[])
  
    const handlewishlistRemove = id =>{
      removeWishlistProduct(id)
      const wishlist = getAllWishlistProduct();
       setProducts(wishlist)
    }
    return (
        <div className='container mx-auto my-6'>
            <h2 className="text-xl font-bold">WishList</h2>
            {
        products.map(product => <ProductWishlist key={product.product_id} product={product} handlewishlistRemove={handlewishlistRemove}></ProductWishlist>)
       }
        </div>
    );
};

export default ProductWishlists;