import React from "react";

import Navigation from "../components/navigation";
import Intro from "../components/intro";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="bg-gray-background flex justify-center mx-2">
      <div className="pb-24 mt-6 w-full sm:w-3/5">
        <Navigation />
        <div className="border-b-2 border-gray-300">
          <Intro />
        </div>
        <div className="border-b-2 border-gray-300" id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
