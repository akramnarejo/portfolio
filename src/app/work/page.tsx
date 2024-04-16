"use client";
import React from "react";
import { skills, projects } from "../lib/constants";
import Card from "../lib/components/card";

const Page = () => {
  return (
    <div className="mt-4">
      <h2 className="[font-size:_clamp(2rem,3vw,6rem)] font-bold dark:text-white">
        Work
      </h2>
      <p className="text-[#666] [font-size:_clamp(1.2rem,1.5vw,2rem)]">
        Following are the tools and skills, I apply to build responsive UIs and
        integrate APIs. I&apos;m also learning blockchain to develop
        de-centralized apps.
      </p>
      {/* skills */}
      <div className="flex gap-4 flex-wrap mt-8">
        {skills.map((item, ind) => {
          return (
            <span
              key={ind}
              className={`md:text-xl bg-black border border-[#1f1f1f] hover:border-blue-200 hover:text-blue-200 p-2 rounded-lg text-[#666] hover:skew-y-3 ease-in-out duration-500`}
            >
              {item}
            </span>
          );
        })}
      </div>
      {/* Projects */}
      <div className="max-w-full grid gap-8 md:grid-cols-2 mt-16 mb-4">
        {projects.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
