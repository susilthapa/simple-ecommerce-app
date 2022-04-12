import React from "react";

import WatchImg from "../assets/images/watch.jpeg";

function ItemCard() {
  return (
    <div className="w-28">
      <div className="w-full h-32 bg-white rounded-lg p-3 flex items-center">
        <img src={WatchImg} alt="watch" className="w-full h-auto" />
      </div>
      <div className="text-xs mt-2">
        <p>Apple Watch</p>
        <div className="text-center">
          <p>$500.6</p>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
