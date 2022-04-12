import Axios from "./Axios";

import type { ProductType } from "../components/ProductList";

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
      })
    );
    return { status: true, data: productList };
  } catch (error) {
    return { status: false };
  }
};
