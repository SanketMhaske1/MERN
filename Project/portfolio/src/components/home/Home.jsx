import React from "react";
import LeftHome from "./LeftHome";
import Righthome from "./Righthome";

function Home() {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-center  border-b-[1px] border-b-black "
    >
      <LeftHome />
      <Righthome />
    </section>
  );
}

export default Home;
