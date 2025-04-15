import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

function LeftHome() {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "Ui Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <p className="text-lg font-normal uppercase lightText title">
          welcome to my world
        </p>
        <p className="text-6xl font-bold text-white">
          Hi I'm <span className="text-[#ff014f] capitalize">Sanket</span>
        </p>
        <p className="text-4xl font-bold text-white">
          a <span className="">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </p>
        <p className="text-base lightText  leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div className="flex justify-between items-center lightText">
        <div>
          <p className="text-base uppercase title mb-4">Find me in</p>
          <div className="flex gap-4">
            <span className="home-btn">
              <FaFacebookF />
            </span>
            <span className="home-btn">
              <FaTwitter />
            </span>
            <span className="home-btn">
              <FaLinkedinIn />
            </span>
          </div>
        </div>

        <div>
          <p className="text-base uppercase title mb-4">best skill on</p>
          <div className="flex gap-4">
            <span className="home-btn">
              <FaReact />
            </span>
            <span className="home-btn">
              <SiNextdotjs />
            </span>
            <span className="home-btn">
              <SiTailwindcss />
            </span>
            <span className="home-btn">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftHome;
