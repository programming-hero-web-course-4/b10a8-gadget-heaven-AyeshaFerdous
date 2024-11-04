import { TiDeleteOutline } from "react-icons/ti";

const ProductCart = ({product, handleRemove}) => {

    const {product_title,product_image,price,description,product_id} = product
    return (
        <div className="container mx-auto">
            <div className="border rounded-lg flex justify-between items-center mt-6 p-4">
            <div className="flex items-center gap-6">
              <div>
                <img
                  src={product_image}
                  alt=""
                  className="w-44 h-30 object-cover rounded-3xl p-2"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-800">
                  {product_title}
                </h2>
                <p className="text-gray-400 mb-3">
                  {description}
                </p>
                <p className="text-slate-700 font-semibold">Price : ${price}</p>
              </div>
            </div>

            <div>
              <button onClick={()=> handleRemove(product_id)} className="m-4">
                <TiDeleteOutline className="text-xl text-red-500"></TiDeleteOutline>
              </button>
            </div>
          </div>
        </div>
    );
};

export default ProductCart;