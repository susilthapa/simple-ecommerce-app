import React from "react";
import InputField from "./controls/InputField";

import Select from "./controls/Select";

function ProductFilterBar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full">
      <InputField
        className="w-80"
        placeholder="Apple Watch, samgsung S21, Mackbook Pro..."
      />
      <Select
        placeholder="Categories"
        className="w-60"
        value="Apple"
        options={["Apple", "Samgsung"]}
      />
    </div>
  );
}

export default ProductFilterBar;