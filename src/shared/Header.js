import React from "react";

const Header = () => {
  return (
    <nav className="bg-[#1C2B35] text-white flex justify-between py-5 px-11">
      <div className="div">
        <h2 className="font-semibold">React Commerce</h2>
      </div>
      <div className="flex gap-8">
        <h3>order</h3>
        <h3>review</h3>
        <h3>inventory</h3>
        <h3>login</h3>
      </div>
    </nav>
  );
};

export default Header;
