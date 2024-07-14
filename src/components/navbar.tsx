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
      <div className="flex items-center space-x-2">
        <span className="text-black">Yuna_1234</span>
        <img src="/sample-pfp.png" alt="Profile" className="h-8 w-8 rounded-full" />
      </div>
    </nav>
  );
};

export default Navbar;
