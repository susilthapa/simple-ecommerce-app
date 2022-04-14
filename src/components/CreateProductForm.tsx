import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "./controls/InputField";
import Select from "./controls/Select";
import TextArea from "./controls/TextArea";
import type { ChangeEventType } from "./controls/Select";
import { createProduct, getCategories } from "../shared/apiHelpers";
import { checkString } from "../shared/utils";

function CreateProductForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<string[]>();
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    description: "",
    avatar: "",
    category: "",
  });
  const [validationErrors, setValidationErros] = useState({
    name: "",
    price: "",
    description: "",
    avatar: "",
    category: "",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = {
      name: checkString(productInfo.name),
      price: checkString(productInfo.price),
      description: checkString(productInfo.description),
      avatar: checkString(productInfo.avatar),
      category: checkString(productInfo.category),
    };
    setValidationErros(errors);
    if (Object.values(errors).every((val) => !val.length)) {
      setIsLoading(true);
      const { status } = await createProduct(productInfo);
      if (status) {
        navigate("/");
      }
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | ChangeEventType
  ) => {
    const { name, value } = e.target;
    setProductInfo({ ...productInfo, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const { status, data } = await getCategories();
      if (status) {
        setCategories(data?.map(({ name }) => name));
      }
    };

    fetchData();
  }, []);

  return (
    <form
      className="flex flex-col h-full  w-1/2 m-auto py-8 px-16  items-center mt-3"
      onSubmit={handleFormSubmit}
    >
      <h3 className="text-lg font-medium">Create Product</h3>
      <div className="flex flex-col mt-5 w-full gap-y-3">
        <InputField
          placeholder="Product Name"
          name="name"
          value={productInfo.name}
          onChange={handleInputChange}
          error={true}
          helperText={validationErrors.name}
        />
        <TextArea
          placeholder="Description"
          name="description"
          value={productInfo.description}
          onChange={handleInputChange}
          error={!!validationErrors.description}
          helperText={validationErrors.description}
        />
        <InputField
          placeholder="Image Url"
          name="avatar"
          value={productInfo.avatar}
          onChange={handleInputChange}
          error={!!validationErrors.avatar}
          helperText={validationErrors.avatar}
        />
        <InputField
          placeholder="Price"
          type="number"
          name="price"
          value={productInfo.price}
          onChange={handleInputChange}
          error={!!validationErrors.price}
          helperText={validationErrors.price}
        />
        <Select
          placeholder="Categories"
          name="category"
          options={categories || []}
          value={productInfo.category}
          onChange={handleInputChange}
          error={!!validationErrors.category}
          helperText={validationErrors.category}
        />
        <button
          className="bg-white p-2 rounded-lg hover:opacity-80 text-sm shadow-lg mt-4"
          disabled={isLoading}
        >
          {isLoading ? "SUBMITTING..." : "SUBMIT"}
        </button>
      </div>
    </form>
  );
}

export default CreateProductForm;
