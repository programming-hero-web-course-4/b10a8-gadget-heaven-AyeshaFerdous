import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";
import { IoIosCart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { addProduct } from "../Utility/Storage";


const ProductDetails = () => {
    const data = useLoaderData()
  
    const {id} = useParams()
    
    const [product, setProduct]= useState([]);

    useEffect(()=>{
        const singleData = data.find(product => product.product_id == id);
        setProduct(singleData)
    },[id,data])
    
    const {product_title,product_image,price,availability,description,Specification,rating}= product;

    const handleCart = product =>{
     addProduct(product)
  }
    return (
        <div>
            <div className="bg-[#9538E2] text-white pb-48 relative mb-96">
            <div className="hero-content text-center">
               <div className="max-w-2xl">
                <h1 className="text-4xl font-bold">Product Details</h1>
          <p className="py-6">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
         
        </div>
             </div>
            </div>

            <div className="bg-white flex gap-8 border p-5 rounded-xl w-9/12 mx-auto absolute -bottom-[10.5rem] left-[11rem]  z-10">
           <div className="w-1/3  object-cover">
              <img className="rounded-xl h-full object-cover" src={product_image} alt="" />
           </div>
           <div className="w-2/3 space-y-4">
              <h1 className="text-2xl font-bold">{product_title}</h1>
              <p className="text-xl font-semibold">Price: ${price}</p>
              <span className={`border px-2 py-1 text-sm mt-2 rounded-full ${availability? 'border-green-500 text-green-500': 'border-red-400 text-red-400'}`}>{`${availability? 'InStock':'Stock Out'}`}</span>

              <h1 className="text-xl text-gray-500">{description}</h1>
               <h2 className="text-xl font-semibold mb-3">Specifications: </h2>
              {Specification?.length > 0 ? (
              <ol className="list-decimal pl-5 text-gray-500">
                {Specification.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ol>
            ) : (
              <p>No specifications available.</p>
            )}
        <h2 className="text-xl font-semibold mb-3">Rating: </h2>
        <div className="flex items-center gap-3">
        <ReactStars
        count={5}
        value={rating}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
       fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
       />

       <p className="px-2 py-1 rounded-full border">{rating}</p>
        </div>

        
            <div className="flex gap-4 items-center">
            <button onClick={()=>handleCart(product)} className="flex items-center gap-3 bg-[#9538E2] text-white btn rounded-full hover:text-black">Add to Cart  <IoIosCart/></button>

              <button className="btn text-xl rounded-full"><CiHeart/></button>

            </div>
       
           </div>
        </div>
        </div>
    );
};

export default ProductDetails;