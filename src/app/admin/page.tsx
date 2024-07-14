"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const AdminPage = () => {
  const pathname = usePathname();
  return (
    <div className="p-12 w-max-screen">
      <h2 className="text-emerald-900 font-bold text-2xl">DASHBOARD</h2>
      <p className="text-xs font-normal mb-2">DASHBOARD / INDEX</p>
      <div className="flex flex-col w-full mt-4 border border-gray-300 p-2 rounded-lg">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      USERNAME
                    </th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      NIM
                    </th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      EMAIL
                    </th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      STATUS
                    </th>
                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">UDIN SIMALAKAMA</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">2307411013</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">UDINSIMALAKAMA@PNJ.AC.ID</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">ACTIVE</td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button data-hs-overlay="#hs-slide-down-animation-modal" type="button" className="p-2 mx-1 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-cyan-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                      <i data-feather="plus"></i>
                    </button>
                    <button type="button" className="p-2 mx-1 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-yellow-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                      <i data-feather="edit-2"></i>
                    </button>
                    <button type="button" className="p-2 mx-1 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                      <i data-feather="trash"></i>
                    </button>
                    </td>
                  </tr>
              
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
<div id="hs-slide-down-animation-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
  <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
        <h3 className="font-bold text-gray-800 dark:text-white">
          CREATE USER
        </h3>
        <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-overlay="#hs-slide-down-animation-modal">
          <span className="sr-only">Close</span>
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div className="p-4 overflow-y-auto">
        <form action="" className="w-full">
          <div className="max-w-full mb-2">
            <label className="block text-sm font-medium mb-2 dark:text-white">USERNAME</label>
            <input type="text" id="input-label" className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm border focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Masukan Username..."/>
          </div>

          <div className="max-w-full mt-2">
            <label className="block text-sm font-medium mb-2 dark:text-white">NIM</label>
            <input type="number" id="input-label" className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm border focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Masukan NIM..."/>
          </div>

          <div className="max-w-full mt-2">
            <label className="block text-sm font-medium mb-2 dark:text-white">EMAIL</label>
            <input type="text" id="input-label" className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm border focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Masukan EMAIL..."/>
          </div>
          
        </form>
      </div>
      <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#hs-slide-down-animation-modal">
          Close
        </button>
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-cyan-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default AdminPage;
