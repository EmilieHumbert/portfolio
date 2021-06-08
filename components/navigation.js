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

      <div className="flex flex-col justify-between lg:hidden">
        <div>
          <button
            onClick={() => setIsActive(!isActive)}
            className="focus:outline-none px-4 mt-6 uppercase"
          >
            Menu
          </button>
          <div className="absolute bg-white flex flex-col left-5 right-0 mt-1 w-auto z-50">
            {isActive &&
              pages.map((page) => {
                return (
                  <a
                    key={page}
                    className="bg-white bottom-0 capitalize focus:outline-none pt-4 pl-4 pr-4 hover:text-gray-500 text-2xl"
                    onClick={() => {
                      setIsActive(!isActive);
                    }}
                  >
                    {page}
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
