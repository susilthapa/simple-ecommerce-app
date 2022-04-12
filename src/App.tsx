import React from "react";
import Select from "./components/controls/Select";
import ItemCard from "./components/ItemCard";
import ItemList from "./components/ItemList";
import ItemsFilterBar from "./components/ItemsFilterBar";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto bg-background px-10 py-6 2xl:px-20 2xl:py-8">
      <Navbar />
      <ItemsFilterBar />
      <ItemList />
    </div>
  );
}

export default App;
