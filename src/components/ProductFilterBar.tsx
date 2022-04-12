import React from "react";
import InputField from "./controls/InputField";

import Select, { ChangeEventType } from "./controls/Select";
import { CategoryType } from "./ProductList";

export interface IProps {
  categories: CategoryType[];
  onChnage: (event: ChangeEventType) => void;
  selectedCategory?: CategoryType;
}

function ProductFilterBar({ categories, onChnage, selectedCategory }: IProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full">
      <InputField
        className="w-80"
        placeholder="Apple Watch, samgsung S21, Mackbook Pro..."
      />
      <Select
        placeholder="Categories"
        className="w-60"
        options={categories}
        optionLabelKey="name"
        onChange={onChnage}
        value={selectedCategory}
      />
    </div>
  );
}

export default ProductFilterBar;
