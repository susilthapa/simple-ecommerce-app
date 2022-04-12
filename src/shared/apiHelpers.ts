import Axios from "./Axios";

import type { CategoryType, ProductType } from "../components/ProductList";

export const getProducts = async () => {
  try {
    const response = await Axios("/products");
    const productList: ProductType[] = response.data.map(
      (product: ProductType) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        avatar: product.avatar,
        category: product.category,
      })
    );
    return { status: true, data: productList };
  } catch (error) {
    return { status: false };
  }
};

export const getProduct = async (id: string) => {
  try {
    const response = await Axios(`/products/${id}`);
    const product: ProductType = {
      id: response.data.id,
      name: response.data.name,
      price: response.data.price,
      description: response.data.description,
      avatar: response.data.avatar,
      category: response.data.category,
    };
    return { status: true, data: product };
  } catch (error) {
    return { status: false };
  }
};

export const getCategories = async (): Promise<{
  status: boolean;
  data: CategoryType[];
}> => {
  try {
    const response = await Axios("/categories");
    const categoryList: CategoryType[] = response.data.map(
      (product: CategoryType) => ({
        id: product.id,
        name: product.name,
      })
    );
    return { status: true, data: categoryList };
  } catch (error) {
    return { status: false, data: [] };
  }
};
