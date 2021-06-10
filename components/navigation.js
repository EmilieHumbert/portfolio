import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const getHref = (page) => (page === "home" ? "/" : `#${page}`);

export default function Navigation() {
  const router = useRouter();
  const pages = ["about", "projects", "contact"];
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="border-b-4 border-gray-300 flex flex-wrap h-24 justify-between mt-5 pb-5">
      <Link href="/">
        <div className="content-center flex flex-wrap">
          <img alt="logo" src="/images/logo.png" className="w-12 lg:w-20" />
        </div>
      </Link>
      {pages.map((page) => {
        return (
          <Link key={page} href={getHref(page)}>
            <a className="hidden lg:flex lg:flex-wrap lg:content-center gap-x-8 h-0 lg:h-full">
              {page}
            </a>
          </Link>
        );
      })}

      <div className="lg:hidden content-center flex flex-col justify-between">
        <div>
          <button
            onClick={() => setIsActive(!isActive)}
            className="content-center focus:outline-none px-4 mt-2 hover:text-gray-500 uppercase"
          >
            Menu
          </button>
          <div className="absolute bg-white flex flex-col left-2/3 mt-1 right-0 w-auto">
            {isActive &&
              pages.map((page) => {
                return (
                  <Link key={page} href={getHref(page)}>
                    <a
                      key={page}
                      className="bg-white bottom-0 capitalize cursor-pointer focus:outline-none hover:text-gray-500 pt-4 pl-4 pr-4"
                      onClick={() => {
                        setIsActive(!isActive);
                      }}
                    >
                      {page}
                    </a>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
