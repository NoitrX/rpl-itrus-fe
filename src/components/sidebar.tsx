// src/components/Sidebar.tsx

import React, { useEffect } from "react";
import Link from "next/link";
import feather from "feather-icons";

const Sidebar: React.FC = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="h-screen w-56 bg-white text-emerald-900 p-4">
      <div className="p-4 mb-4 bg-emerald-900 text-white flex items-center rounded-lg">
        <i data-feather="home" className="mr-2"></i>
        <Link href="/">
          <h2>Home</h2>
        </Link>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="p-4 hover:bg-gray-100 flex items-center rounded-">
            <i data-feather="search" className="mr-2"></i>
            <Link href="/search">
              <h2>Search</h2>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-100 flex items-center rounded">
            <i data-feather="heart" className="mr-2"></i>
            <Link href="/liked">
              <h2>Liked</h2>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-100 flex items-center rounded">
            <i data-feather="user" className="mr-2"></i>
            <Link href="/profile">
              <h2>Profile</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
