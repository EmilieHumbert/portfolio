import React, { useState } from "react";

export default function Navigation() {
  const pages = ["Home", "About", "Projects", "Contact"];
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-wrap content-center h-auto justify-between mt-5">
      <div className="flex flex-wrap content-center">
        <img alt="logo" src="/images/logo.png" className="w-12 lg:w-20" />
      </div>
      {pages.map((page, index) => {
        return (
          <div>
            <a
              key={index}
              className="hidden lg:flex lg:flex-wrap lg:content-center gap-x-8 h-0 lg:h-full"
            >
              {page}
            </a>
          </div>
        );
      })}

      <div className="flex flex-col content-center justify-between lg:hidden">
        <div>
          <button
            onClick={() => setIsActive(!isActive)}
            className="focus:outline-none px-4 mt-2 content-center uppercase hover:text-gray-500"
          >
            Menu
          </button>
          <div className="absolute bg-white flex flex-col left-2/3 right-0 mt-1 w-auto ">
            {isActive &&
              pages.map((page) => {
                return (
                  <a
                    key={page}
                    className="bg-white bottom-0 capitalize focus:outline-none pt-4 pl-4 pr-4 hover:text-gray-500 cursor-pointer"
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
