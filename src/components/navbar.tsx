import React, { useEffect } from "react";
import Link from "next/link";
import feather from "feather-icons";

const Navbar: React.FC = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="text-black bg-white p-4 flex items-center">
      <img src="/logo.png" alt="Logo" className="h-24 mr-4" />
      <h2 className="text-emerald-800 font-bold flex text-2xl mb-3">ITRUS</h2>
      <form className="flex items-center w-2/5 relative mx-32 mb-2">
        <input
          type="search"
          placeholder="Cari apa nich?"
          className="rounded-md h-11 w-full px-5 text-black border-2 border-white bg-gray-200 pr-10"
        />
        <button
          type="submit"
          data-feather="search"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
        ></button>
      </form>
    </div>
  );
};

export default Navbar;
