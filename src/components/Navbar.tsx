"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="items-center pr-4 mx-auto md:flex md:pr-8">
        <div className="flex items-center justify-between md:block">
          <Link href="/">
            <img src="/ethan_nunn_logo.png" alt="Logo" className="h-25 w-auto" />
          </Link>
           <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        
        <div
          className={`flex-1 justify-self-center pt-3 pb-6 mt-8 md:block md:py-5 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
    
          <ul className="justify-center items-center pl-6 space-y-8 md:flex md:pl-0 md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}