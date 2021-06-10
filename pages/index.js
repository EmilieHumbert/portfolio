import React from "react";

import Navigation from "../components/navigation";
import Intro from "../components/intro";
import Projects from "../components/projects";

export default function Home() {
  return (
    <div className="flex justify-center mx-2">
      <div className="border-b-2 border-gray-300 pb-24 mt-6 w-full sm:w-4/5">
        <Navigation />
        <div className="border-b-2 border-gray-300">
          <Intro />
        </div>
        <div className="border-b-2 border-gray-300">
          <Projects />
        </div>
      </div>
    </div>
  );
}
