"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import feather from "feather-icons";

const Navbar: React.FC = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <nav className="flex items-center justify-between p-2 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-24" />
        <span className="text-lg font-bold text-green-900">ITRUS</span>
      </div>
      <div className="w-1/3 flex border border-gray-300 rounded-full text-black px-4 py-2">
        <input type="text" placeholder="Cari Apa nich ? ...." className=" w-full" />
        <button type="submit" data-feather="search" className="  text-gray-500"></button>
      </div>
      <div className="flex items-center space-x-2 m-1 hs-dropdown [--trigger:hover] relative">
        <span className="text-black">Yuna_1234</span>
        <button id="hs-dropdown-hover-event" type="button">
          <img src="/sample-pfp.png" alt="Profile" className="h-8 w-8 rounded-full" />
        </button>
        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full z-[99999]" aria-labelledby="hs-dropdown-hover-event">
          <Link  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
            PROFILE
          </Link>
          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
            LOGOUT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
