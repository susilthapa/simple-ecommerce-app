import React from "react";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/outline";

import { ProductType } from "./ProductList";

interface Iprops {
  product: ProductType;
  handleProductDelete: (id: string) => void;
}
function ProductCard({ product, handleProductDelete }: Iprops) {
  const { name, price, id, avatar } = product;

  return (
    <div className="relative   w-28 z-50">
      <div className="group w-full h-32 bg-white rounded-lg p-3 flex items-center">
        <Link to={`/${id}`}>
          <img
            src={avatar}
            alt="watch"
            className="w-full max-h-full group-hover:scale-110 transition"
          />
        </Link>
        <TrashIcon
          className="group-hover:block  hidden  cursor-pointer absolute h-6 w-6 text-red-600 -right-2 -top-2 bg-gray-400 rounded-full p-1"
          onClick={() => handleProductDelete(id)}
        />
      </div>
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
