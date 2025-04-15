import React from "react";
import Title from "../layouts/Title";

function Features() {
  return (
    <section
      id="features"
      className="w-full h-[800px] py-20  border-b-[1px] border-b-black lightText"
    >
      <Title title="Features" description="What I Do" />
      <div className="w-1/3 h-80"></div>
    </section>
  );
}

export default Features;
