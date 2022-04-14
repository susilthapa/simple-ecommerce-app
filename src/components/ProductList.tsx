import React, { useEffect, useState } from "react";

import CreateProductIcon from "./CreateProductIcon";
import ProductCard from "./ProductCard";
import ProductFilterBar from "./ProductFilterBar";
import { getCategories, getProducts } from "../shared/apiHelpers";
import Spinner from "../shared/components/Spinner";
import { ChangeEventType } from "./controls/Select";

export type ProductType = {
  id: string;
  name: string;
  price: string;
  description: string;
  avatar: string;
  category: string;
};

export type CategoryType = {
  id: string;
  name: string;
};

function ProductList() {
  const [products, setProducts] = useState<ProductType[]>();
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>();
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryFilter = (event: ChangeEventType) => {
    const { value } = event?.target;
    setSelectedCategory(value);
  };

  console.log({ selectedCategory, products });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { status, data } = await getProducts();
      const { status: categoryStatus, data: categoryData } =
        await getCategories();
      if (status) {
        setProducts(data);
      }
      if (categoryStatus) {
        setCategories(categoryData);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-10 2xl:mt-13 w-full">
      <ProductFilterBar
        categories={categories}
        onChnage={handleCategoryFilter}
        selectedCategory={selectedCategory}
      />
      <div className="mt-12 w-11/12 md:w-1/2 m-auto flex flex-wrap gap-9 justify-center">
        {selectedCategory
          ? products
              ?.filter(({ category }) => category === selectedCategory.name)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          : products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      <CreateProductIcon />
      {isLoading && <Spinner />}
    </div>
  );
}

export default ProductList;
