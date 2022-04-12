import React from "react";
import InputField from "./controls/InputField";
import Select from "./controls/Select";
import TextArea from "./controls/TextArea";

function CreateProductForm() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col h-full  w-1/2 m-auto py-8 px-16  items-center mt-3"
      onSubmit={handleFormSubmit}
    >
      <h3 className="text-lg font-medium">Create Product</h3>
      <div className="flex flex-col mt-5 w-full gap-y-3">
        <InputField placeholder="Product Name" />
        <TextArea placeholder="Description" />
        <InputField placeholder="Image Url" />
        <InputField placeholder="Price" type="number" />
        <Select placeholder="Categories" options={[]} />
        <button className="bg-white p-2 rounded-lg hover:opacity-80 text-sm shadow-lg mt-4">
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default CreateProductForm;
