import React from "react";

import CreateProductIcon from "./CreateProductIcon";
import ProductCard from "./ProductCard";
import ProductFilterBar from "./ProductFilterBar";

function ProductList() {
  return (
    <div className="mt-10 2xl:mt-13 w-full">
      <ProductFilterBar />
      <div className="mt-12 w-11/12 md:w-1/2 m-auto flex flex-wrap gap-9">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <CreateProductIcon />
    </div>
  );
}

export default ProductList;
