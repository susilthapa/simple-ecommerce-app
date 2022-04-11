import React from "react";

function Navbar() {
  return (
    <div className="sticky top-0 flex justify-between italic font-medium text-lg px-4 py-2.5 bg-primary rounded-lg w-full  shadow-lg">
      <h2>UPayments</h2>
      <a href="#" className="transition hover:scale-105">
        Register
      </a>
    </div>
  );
}

export default Navbar;
