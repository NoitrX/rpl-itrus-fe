"use client";
import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import Link from "next/link";
import feather from "feather-icons";
import { usePathname } from "next/navigation";

export default function LayoutAdmin({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div className="max-w-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex">
        <div className="h-screen w-56 bg-white text-emerald-900 p-4 shadow-md">
          <div className={` flex items-center rounded-lg ${pathname === "/admin" ? "bg-emerald-900 text-white p-4" : ""}`}>
            <i data-feather="home" className="mr-2"></i>
            <Link href="/">
              <h2>Home</h2>
            </Link>
          </div>
          <nav className="mt-4">
            <ul>
              <li className={` flex items-center rounded-lg p-4 ${pathname === "/reported-user" ? "bg-emerald-900 text-white p-4" : ""}`}>
                <i data-feather="alert-triangle" className="mr-2"></i>
                <Link href="/search">
                  <h2>Reported User</h2>
                </Link>
              </li>
              <li className={` flex items-center rounded-lg p-4 ${pathname === "/list-user" ? "bg-emerald-900 text-white p-4" : ""}`}>
                <i data-feather="heart" className="mr-2"></i>
                <Link href="/liked">
                  <h2>List User</h2>
                </Link>
              </li>
              <li className={` flex items-center rounded-lg p-4 ${pathname === "/list-blog" ? "bg-emerald-900 text-white p-4" : ""}`}>
                <i data-feather="user" className="mr-2"></i>
                <Link href="/profile">
                  <h2>List Blog</h2>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
