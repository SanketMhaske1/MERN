import React, { useState } from "react";
import Card from "./Card";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

function Testimonial({ reviews }) {
  const [index, setIndex] = useState(0);
  const shiftHandler = (newIndex) => {
    if (newIndex === -1) newIndex = reviews.length - 1;
    if (newIndex === reviews.length - 1) newIndex = 0;
    setIndex(newIndex);
  };
  const surpriseMeHandler = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };
  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]} />
      <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
        <button
          onClick={() => shiftHandler(index - 1)}
          className="cursor-pointer hover:text-violet-500 "
        >
          <MdNavigateBefore />
        </button>
        <button
          onClick={() => shiftHandler(index + 1)}
          className="cursor-pointer hover:text-violet-500 "
        >
          <MdNavigateNext />
        </button>
      </div>
      <div className="mt-6">
        <button
          onClick={surpriseMeHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
