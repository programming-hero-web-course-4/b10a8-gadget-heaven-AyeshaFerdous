import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const data = useLoaderData();
    
    const {category} = useParams();
    

    const [products, setProducts]= useState([])
    const [notFound, setNotFound] = useState(false)
    
    useEffect(()=>{
        if(category){
            const filterByCategory = [...data].filter(product => product.category == category)
           if(filterByCategory.length === 0){
            setProducts([]);
            setNotFound(true)
           }
           else{
            setProducts(filterByCategory);
            setNotFound(false)
           }
        }
        else{
            setProducts(data.slice(0,6));
        }
    }, [data, category])
    
    return (
          
             <div className='grid grid-cols-3 gap-6'>
            {
               notFound ? (
                <p className='text-2xl font-bold text-zinc-700 text-center'>No Products Found for this selected Category!!!</p>
               ):(
               
                   products.map(product => <Product key={product.id} product={product}></Product>)
               
               )
            }
             </div>
       
      
    );
};

export default Products;