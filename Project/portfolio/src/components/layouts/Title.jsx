import React from "react";

function Title({ title, description }) {
  return (
    <div className=" flex flex-col gap-4 title mb-14">
      <p className="text-sm uppercase font-light tracking-wide text-[#ff014f]">
        {title}
      </p>
      <p className="text-5xl text-gray-300 font-bold capitalize">
        {description}
      </p>
    </div>
  );
}

export default Title;
