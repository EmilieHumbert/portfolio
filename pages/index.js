import React from "react";

import Navigation from "../components/navigation";
import Intro from "../components/intro";

export default function Home() {
  return (
    <div className="flex justify-center mx-2">
      <div className="border-b-2 border-gray-300 pb-24 mt-6 w-full sm:w-3/5">
        <Navigation />
        <Intro />
      </div>
    </div>
  );
}
