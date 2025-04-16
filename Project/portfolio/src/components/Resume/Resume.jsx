import React from "react";
import Title from "../layouts/Title";
import ResumeCard from "./ResumeCard";

function Resume() {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className=" w-full flex justify-center items-center text-center">
        <Title title="7+ years of experience" description="My Resume" />
      </div>
      <div>
        <ul className="grid grid-cols-4 lightText">
          <li className="resume-btn">Education</li>
          <li className="resume-btn">Professional Skills</li>
          <li className="resume-btn">Experience</li>
          <li className="resume-btn">Achievements</li>
        </ul>
      </div>
      <div className="py-12 title">
        <p className="text-sm text-[#ff014f] tracking-[4px]">1998 - 2010</p>
        <p className="text-4xl font-bold lightText">Education Quality</p>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="BSc in Computer Science"
          subTitle="University of DVI (2006 - 2010)"
          result="3.90/4"
          des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
        />
        <ResumeCard
          title="AS - Science & Information"
          subTitle="SuperKing College (2001 - 2005)"
          result="4.75/5"
          des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
        />
        <ResumeCard
          title="Secondary School Education"
          subTitle="Kingstar Secondary School (1998 - 2000)"
          result="5.00/5"
          des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
        />
      </div>
    </section>
  );
}

export default Resume;
