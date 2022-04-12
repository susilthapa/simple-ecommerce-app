import React from "react";
import { Link } from "react-router-dom";

import { ProductType } from "./ProductList";

interface Iprops {
  product: ProductType;
}
function ProductCard({ product }: Iprops) {
  const { name, price, id, avatar } = product;
  return (
    <div className="w-28">
      <Link to={`/${id}`}>
        <div className="group w-full h-32 bg-white rounded-lg p-3 flex items-center">
          <img
            src={avatar}
            alt="watch"
            className="w-full max-h-full group-hover:scale-110 transition"
          />
        </div>
      </Link>
      <div className="text-xs mt-2">
        <p>{name}</p>
        <div className="text-center">
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
