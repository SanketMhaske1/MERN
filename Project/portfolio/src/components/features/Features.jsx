import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiAntdesign, SiProgress } from "react-icons/si";

function Features() {
  return (
    <section
      id="features"
      className="w-full py-20  border-b-[1px] border-b-black lightText"
    >
      <Title title="Features" description="What I Do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
        hic consequuntur eum repellendus ad."
          icon={<FaBars />}
        />

        <Card
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
        hic consequuntur eum repellendus ad."
          icon={<AiFillAppstore />}
        />

        <Card
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
        hic consequuntur eum repellendus ad."
          icon={<SiProgress />}
        />

        <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur . Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        />

        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        />

        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features;
