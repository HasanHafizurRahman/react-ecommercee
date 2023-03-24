import React, { useEffect, useState } from "react";

const Shop = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="flex">
      <div className="w-4/5 grid grid-cols-1 lg:grid-cols-3 px-10">
        {product.map((item) => (
          <div className="w-[286px] border 1px #95A0A7 rounded-md">
            <img className="w-[286px] h-[286px]" alt="shoe" src={item.img} />
            <h2 className="text-lg pl-2">{item.name}</h2>
            <h5 className="text-sm pl-2">Price:${item.price}</h5>
            <br />
            <p className="text-xs pl-2">{item.seller}</p>
            <p className="text-xs pl-2">Ratings: {item.ratings} star</p>
            <button className="bg-[#FFE0B3] w-full mt-3">Add to cart</button>
          </div>
        ))}
      </div>
      <div className="w-1/5 h-[944px] bg-[#FF9900] mr-11">Shop Cart</div>
    </div>
  );
};

export default Shop;
