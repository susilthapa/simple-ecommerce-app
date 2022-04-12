import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../shared/apiHelpers";
import Spinner from "../shared/components/Spinner";
import { ProductType } from "./ProductList";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const [isLoadding, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const { status, data } = await getProduct(productId || "");
      if (status) {
        setProduct(data);
      }
      setIsLoading(false);
    };
    fetchProduct();
  }, [productId]);
  return isLoadding ? (
    <Spinner />
  ) : (
    <div className="mt-10 2xl:mt-13 w-1/2 m-auto">
      <div className="flex gap-x-5 border-b border-gray-600 pb-5">
        <div className="w-40 max-h-52 ">
          <img src={product?.avatar} className="w-full h-full rounded-lg" />
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-medium">{product?.name}</h1>
          <p>${product?.price}</p>
        </div>
      </div>
      <div className="mt-4">
        <h2>Description</h2>
        <p className="text-xs text-gray-800 mt-1">{product?.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
