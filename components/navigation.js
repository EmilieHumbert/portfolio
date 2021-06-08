import React, { useState } from "react";

export default function Navigation() {
  const pages = ["Home", "About me", "Projects", "Contact me"];
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-wrap content-center justify-between h-full m-5">
      <div className="flex flex-wrap content-center">
        <img alt="logo" src="/images/logo.png" className="w-20 " />
      </div>
      {pages.map((page) => {
        return (
          <a
            key={page}
            className="hidden lg:flex lg:flex-wrap lg:content-center gap-x-8 h-0 lg:h-full"
          >
            {page}
          </a>
        );
      })}

      <div className="lg:hidden flex flex-wrap content-center">
        <button onClick={() => setIsActive(!isActive)}>Menu</button>
      </div>
    </div>
  );
}
