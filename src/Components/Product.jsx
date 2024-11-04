import { useNavigate,Link } from "react-router-dom";

const Product = ({product}) => {
    const navigate = useNavigate()


   


    const {product_id,product_image,product_title,price} = product;
    return (
        <div className="flex flex-col p-5 border rounded-xl shadow-xl">
            <div className="pb-2">
                <img className="rounded-xl" src={product_image} alt="" />
            </div>
            <div className="space-y-3">
                <h1 className="text-xl font-bold">{product_title}</h1>
                <p>Price : ${price}</p>
                <button onClick={()=> navigate(`/productDetails/${product_id}`)} className="btn border-[#9538E2] rounded-full hover:bg-[#9538E2] hover:text-white">View Details</button>
            </div>
        </div>
    );
};

export default Product;