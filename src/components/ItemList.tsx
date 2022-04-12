import React from "react";

import ItemCard from "./ItemCard";

function ItemList() {
  return (
    <div className="mt-12 w-11/12 md:w-1/2 m-auto flex flex-wrap gap-9">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
}

export default ItemList;
