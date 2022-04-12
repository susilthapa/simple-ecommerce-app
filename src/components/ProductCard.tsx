import React from "react";
import { Link } from "react-router-dom";

import WatchImg from "../assets/images/watch.jpeg";
import { ProductType } from "./ProductList";

interface Iprops {
  product: ProductType;
}
function ProductCard({ product }: Iprops) {
  const { name, price, id } = product;
  return (
    <div className="w-28">
      <Link to="/">
        <div className="group w-full h-32 bg-white rounded-lg p-3 flex items-center">
          <img
            src={WatchImg}
            alt="watch"
            className="w-full h-auto group-hover:scale-110 transition"
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
