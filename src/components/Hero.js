import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-11">
      <div>
        <p className="text-[#FF9900] text-sm">Sale up to 70% of</p>
        <br />
        <h1 className="text-[#1C2B35] text-3xl font-semibold">
          New Collection For Winter
        </h1>
        <h2 className="text-[#2A414F] text-lg">
          Discover all the new arrivals of ready-to-wear collection
        </h2>
        <br />
        <button className="text-[#0E161A] bg-[#FF9900] px-5 py-1">
          Buy Now
        </button>
      </div>
      <div>
        <img
          className="h-[554px] w-[470px]"
          src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c53945c38b614702ba6fae1d0164b2f1_9366/LNY_Trefoil_Fill_Tee_Black_HR9040_21_model.jpg"
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
