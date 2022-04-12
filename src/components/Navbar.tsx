import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky z-50 top-0 flex justify-between italic font-medium text-lg px-4 py-2.5 bg-white rounded-lg w-full  shadow-lg">
      <Link to="/">
        <h2 className="hover:scale-105 transition">UPayments Store</h2>
      </Link>
      <a href="#" className="transition hover:scale-105">
        Register
      </a>
    </div>
  );
}

export default Navbar;
