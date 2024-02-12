import React, { useEffect, useState } from "react";
import ShimmerCard from "../components/ShimmerCard";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const data = await fetch("https://api.pujakaitem.com/api/products");
    const json = await data.json();
    setProducts(json);
    console.log(json);
  };

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  return products.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="border border-black flex flex-wrap justify-center items-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 m-4 p-4 rounded-lg max-w-xs"
        >
          <img
            className="h-48 w-full object-cover mb-4 rounded-md"
            src={product.image}
            alt={product.name}
          />
          <h2 className="text-lg font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">${product.price / 100}</p>
          <p className="text-sm text-gray-600 mb-2">By {product.company}</p>
          <button
            onClick={() => handleAdd(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
