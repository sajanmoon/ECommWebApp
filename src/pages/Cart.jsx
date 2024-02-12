import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleRemove = (productID) => {
    dispatch(removeItem(productID));
  };
  return (
    <div className="container mx-auto mt-8">
      <h1 className=" text-center text-4xl my-4">Products</h1>
      <div className="mx-auto max-w-md">
        {items.map((product) => (
          <div key={product.id} className="flex items-center mb-4 border p-4">
            <img
              src={product.image}
              alt=""
              className="w-[200px] h-[200px] mr-4"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-bold">{product.name}</h1>
              <h2 className="text-gray-700">${product.price}</h2>
              <button
                onClick={() => handleRemove(product.id)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
