import React from "react";

function Loader() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="loader"></div>
      <p className="text-lg text-gray-800 font-semibold">Loading.....</p>
    </div>
  );
}

export default Loader;
