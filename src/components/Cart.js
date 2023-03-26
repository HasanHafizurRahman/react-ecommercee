import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="sticky top-0">
      <h1 className="text-2xl text-center pb-6 pt-3">Order Summery</h1>
      <h2 className="pl-5">Selected Products :{cart.length} </h2>
      <h2 className="pl-5">Total Price : </h2>
      <h2 className="pl-5">Total Shipping Price : </h2>
      <h2 className="pl-5">Total Tax : </h2>
      <h2 className="pl-5 text-lg font-semibold">Grand Total : </h2>
      <button className="bg-red-800 px-10 flex mx-10 py-2 rounded text-white my-5">
        Clear Cart
      </button>
      <button className="bg-orange-800 px-10 flex mx-10 my-5 py-2 rounded text-white">
        Review Order
      </button>
    </div>
  );
};

export default Cart;
