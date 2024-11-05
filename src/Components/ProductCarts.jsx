import React, { useEffect, useState } from 'react';
import { getAllCartProduct, removeCartProduct } from '../Utility/Storage';
import ProductCart from './ProductCart';

const ProductCarts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const cart = getAllCartProduct();
        setProducts(cart)
    },[])
  
    const handleRemove = id =>{
      removeCartProduct(id)
      const cart = getAllCartProduct();
       setProducts(cart)
    }
    return (
        <div>
           <div className="flex justify-between items-center container mx-auto my-6">
        <div className="text-xl font-bold">
            <h1>Cart</h1>
        </div>
        <div className="space-x-4">
           <button className="btn border-[#9538E2] rounded-full ">Sort By Price</button>
           <button className="btn bg-gradient-to-tr text-white from-[#9538E2] via-purple-500 to-pink-300 drop-shadow-[inset_0px_4px_50px_0px_rgba(11,11,11,0.15)">Purchase</button>
        </div>
       </div>

       {
        products.map(product => <ProductCart key={product.product_id} product={product} handleRemove={handleRemove}></ProductCart>)
       }
        </div>
    );
};

export default ProductCarts;