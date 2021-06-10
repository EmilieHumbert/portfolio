import React from "react";

import Navigation from "../components/navigation";
import Intro from "../components/intro";
import Projects from "../components/projects";

export default function Home() {
  return (
    <div className="bg-gray-background flex justify-center mx-2">
        <div className="border-b-2 border-gray-300">
          <Intro />
        </div>
        <div className="border-b-2 border-gray-300" id="projects">
          <Projects />
        </div>
      </div>
    </div>
  );
}
