import React, { useEffect, useState } from "react";
import { getAllCartProduct, removeCartProduct } from "../Utility/Storage";
import ProductCart from "./ProductCart";
import { useNavigate } from "react-router-dom";

import modalImg from '../assets/assets/Group.png';

const ProductCarts = () => {
  const [products, setProducts] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  const navigate = useNavigate();

  const items = getAllCartProduct();

  useEffect(() => {
    let sum = 0;
    const prices = items.map((product) => product.price);

    for (let price of prices) {
      sum = sum + price;
    }

    setCartPrice(sum);
  }, [items]);

  useEffect(() => {
    const cart = getAllCartProduct();
    setProducts(cart);
  }, []);

  const handleRemove = (id) => {
    removeCartProduct(id);
    const cart = getAllCartProduct();
    setProducts(cart);
  };

  const handleCloseModal =() =>{
    products.map(product=> removeCartProduct(product.product_id));
    setProducts([]);
    setCartPrice(0);
    navigate('/')
  }
  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };
  const modal = document.getElementById("modal")
  return (
    <div>
      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      
      <dialog id="modal" className="modal modal-bottom sm:modal-middle">
     
       <div className="modal-box flex flex-col justify-center items-center p-8">
         <img className="mt-8" src={modalImg} alt="" />
          <h3 className="mt-6 pb-3 text-2xl font-bold border-b-2">Payment Successfully</h3>
          <p className="font-medium mt-4 text-gray-500">
            Thanks for Purchasing.
            <h3 className="font-medium text-gray-500 mt-4">Total: $ {cartPrice}</h3>
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleCloseModal}  className="btn px-[184px] py-2 rounded-full">Close</button>
            </form>
          </div>
        </div>
       
      </dialog>

      <div className="flex justify-between items-center container mx-auto my-6">
        <div className="text-xl font-bold">
          <h1>Cart</h1>
        </div>
        <div className="space-x-4">
          <span className="text-xl font-bold">Total Cost : $ {cartPrice} </span>
          <button
            onClick={handleSort}
            className="btn border-[#9538E2] rounded-full "
          >
            Sort By Price
          </button>
          <button onClick={()=>{modal.showModal()}} disabled={cartPrice==0} className="btn bg-gradient-to-tr text-white from-[#9538E2] via-purple-500 to-pink-300 drop-shadow-[inset_0px_4px_50px_0px_rgba(11,11,11,0.15)">
            Purchase
          </button>
        </div>
      </div>

      {products.map((product) => (
        <ProductCart
          key={product.product_id}
          product={product}
          handleRemove={handleRemove}
        ></ProductCart>
      ))}
    </div>
  );
};

export default ProductCarts;
