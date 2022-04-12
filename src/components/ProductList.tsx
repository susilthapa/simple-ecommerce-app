import React, { useEffect, useState } from "react";

import CreateProductIcon from "./CreateProductIcon";
import ProductCard from "./ProductCard";
import ProductFilterBar from "./ProductFilterBar";
import { getProducts } from "../shared/apiHelpers";
import Spinner from "../shared/components/Spinner";

export type ProductType = {
  id: string;
  name: string;
  price: string;
  description: string;
  avatar: string;
};

function ProductList() {
  const [products, setProducts] = useState<ProductType[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { status, data } = await getProducts();
      if (status) {
        setProducts(data);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="mt-10 2xl:mt-13 w-full">
      <ProductFilterBar />
      <div className="mt-12 w-11/12 md:w-1/2 m-auto flex flex-wrap gap-9">
        {products?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
      <CreateProductIcon />
      {isLoading && <Spinner />}
    </div>
  );
}

export default ProductList;
