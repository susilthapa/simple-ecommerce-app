import React from "react";

import { Link } from "react-router-dom";
import { PlusSmIcon } from "@heroicons/react/solid";

function CreateProductIcon() {
  return (
    <Link to="/create-product" className="fixed bottom-10 right-12">
      <PlusSmIcon className="h-10 w-10 text-white bg-black rounded-full hover:rotate-180 transition" />
    </Link>
  );
}

export default CreateProductIcon;
