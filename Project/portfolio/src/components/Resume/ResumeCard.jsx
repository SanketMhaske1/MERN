import React from "react";

function ResumeCard({ title, subTitle, result, des }) {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
      <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
      <span className="w-3 h-3 rounded-full bodyColor inline-flex group-hover:bg-[#] duration-300"></span>

      </span>
      </div>
      <div></div>
    </div>
  );
}

export default ResumeCard;
