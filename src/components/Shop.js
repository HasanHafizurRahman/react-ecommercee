import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Product from "./Product";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // const newCart = [...cart, product]
    setCart([...cart, product]);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="flex">
      <div className="w-4/5 grid grid-cols-1 lg:grid-cols-3 px-10">
        {product.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div
        style={{ background: "rgba(255, 155, 0, 0.3)" }}
        className="w-1/5 h-[944px] mr-11"
      >
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
