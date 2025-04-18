import React from "react";
import { HiArrowRight } from "react-icons/hi";

function Card({ title, des, icon }) {
  return (
    <div className="w-full px-12 h-90 py-10 rounded-lg shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            <span className="text-5xl text-[#ff014f]">{icon}</span>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </p>
            <p className="base">{des}</p>
            <span className="text-2xl text-[#ff014f]">
              <HiArrowRight className="mb-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
