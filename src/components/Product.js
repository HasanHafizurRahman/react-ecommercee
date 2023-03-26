import React from "react";

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="w-[286px] h-[508px] border 1px #95A0A7 rounded-md mb-5 relative">
      <img className="w-[286px] h-[286px]" alt="shoe" src={product.img} />
      <h2 className="text-lg pl-2">{product.name}</h2>
      <h5 className="text-sm pl-2">Price:${product.price}</h5>
      <br />
      <p className="text-xs pl-2">{product.seller}</p>
      <p className="text-xs pl-2">Ratings: {product.ratings} star</p>
      <button
        className="bg-[#FFE0B3] w-full mt-3 py-2 absolute bottom-0"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
