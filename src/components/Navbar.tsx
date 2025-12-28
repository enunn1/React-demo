"use client";

import {useState} from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  const [state, setState] = useState(false);

  const menus = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Portfolio", path: "/portfolio"},
    { title: "Contact", path: "/contact"}
  ];

  return (
    <nav className="w-full border-b md:border-0">
      <div className="items-center pr-4 mx-auto md:flex md:pr-8">
        <div className="flex items-center justify-between md:block">
          <Link href="/">
            <Image 
            src="/ethan_nunn_logo.png" 
            alt="Logo" 
            height={100}
            width={250}/>
          </Link>
           <div className="md:hidden">
            <button
              aria-label="Toggle Menu"
              aria-hidden="true"
              className="outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
             <ThemeToggle testid="mobile-toggle" />
          </div>
        </div>
        
        <div
          className={`flex-1 justify-self-center pt-3 pb-6 mt-8 md:block md:py-5 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
    
          <ul className="justify-center items-center pl-6 space-y-8 md:flex md:pl-0 md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="hover:text-indigo-600">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
         <ThemeToggle testid="desktop-toggle" />
        </div>
      </div>
    </nav>
  );
}