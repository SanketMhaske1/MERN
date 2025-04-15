import React from "react";
import { logo } from "../../assets/index";
import { navLinksData } from "../../constants";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="title w-full h-22 mx-auto flex justify-between items-center border-b-[1px] border-b-gray-600 sticky top-0 z-50">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksData.map((navlink) => (
            <li
              className="text-base font-normal text-gray-400  cursor-pointer hover:text-[#ff014f] transition duration-300"
              key={navlink._id}
            >
              <Link
                activeClass="active"
                to={navlink.link}
                spy={true}
                smooth={true}
                offset={70}
                duration={500}
              >
                {navlink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
