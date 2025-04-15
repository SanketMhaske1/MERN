import React from "react";
import { bannerImg } from "../../assets/index";

function Righthome() {
  return (
    <div className="w-1/2 flex justify-center relative">
      <img src={bannerImg} alt="bannerImg" className="w-[500px] h-680px z-10" />
      <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r [#1e2024] to-[#202327] shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default Righthome;
