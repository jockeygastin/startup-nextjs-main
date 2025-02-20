"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import "../../styles/header.css";

const Header = () => {
  function onMenuToggle(){
    let mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
    let toggle1 = document.getElementById("toggle1");


  }

  return (
    <>
      <div>
        <nav className="bg-gray-800 p-4 text-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center pl-8">
              <Image
                src="/images/logo/eavetopLogo22.png"
                loading="lazy"
                alt="logo"
                width={60}
                height={25}
                className="rounded-xl" 
              />
              <h1 className="pl-4 font-serif text-4xl font-bold tracking-wide">
                EAVETOP
              </h1>
            </div>

            {/* Mobile Nav Icon */}
            <div className=" absolute  right-8 top-4 block md:hidden">
              <button
                aria-label="navigation"
                type="button"
                className="text-gray-200 transition duration-300 hover:text-white focus:text-white focus:outline-none md:hidden"
                id="bars"
                onClick={onMenuToggle}
              >
                             <Image
                src="/images/logo/toggle.png"
                loading="lazy"
                alt="logo"
                width={40}
                height={20}
                className="rounded-xl mt-2 " id="toggle"
              />
                            
              </button>
            </div>

            {/* Navigation - Large Screens */}
            <div className="hidden md:flex">
              <ul className="hidden md:flex">
                <li className="pr-8 text-lg">
                  <a
                    href="/"
                    className="focus:text-yellow-500 hover:text-yellow-500 transition duration-300 hover:underline focus:underline focus:outline-none"
                    style={{ textUnderlineOffset: "8px" }}
                  >
                    Home
                  </a>
                </li>
                <li className="pr-8 text-lg">
                  <a
                    href="/about"
                    className="focus:text-yellow-500 hover:text-yellow-500 transition duration-300 hover:underline focus:underline focus:outline-none"
                    style={{ textUnderlineOffset: "8px" }}
                  >
                    About
                  </a>
                </li>
                <li className="pr-8 text-lg">
                  <a
                    href="/blog"
                    className="focus:text-yellow-500 hover:text-yellow-500 transition duration-300 hover:underline focus:underline focus:outline-none"
                    style={{ textUnderlineOffset: "8px" }}
                  >
                    Projects
                  </a>
                </li>
                <li className="pr-8 text-lg">
                  <a
                    href="/contact"
                    className="focus:text-yellow-500 hover:text-yellow-500 transition duration-300 hover:underline focus:underline focus:outline-none"
                    style={{ textUnderlineOffset: "8px" }}
                  >
                    Contact
                  </a>
                </li>
              
              </ul>
            </div>

            <div className="md:flex">
              <a href="#">
                <div className="btn">
                  <ThemeToggler />
                </div>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div id="mobileMenu" className="lg:hidden md:hidden mx-auto flex w-full py-8 text-center">
            <div className="flex w-full flex-col items-center justify-center">
              <a
                href="/"
                className="focus:text-yellow-500 hover:text-orange-700 block cursor-pointer py-3 text-gray-200 transition duration-300 hover:underline focus:underline focus:outline-none"
                style={{ textUnderlineOffset: "8px" }}
              >
                Home
              </a>
              <a
                href="/about"
                className="focus:text-yellow-500 hover:text-orange-700 mt-1 block cursor-pointer py-3 text-gray-200 transition duration-300 hover:underline focus:underline focus:outline-none"
                style={{ textUnderlineOffset: "8px" }}
              >
                About
              </a>
              <a
                href="/blog"
                className="focus:text-yellow-500 hover:text-yellow-500 mt-1 block cursor-pointer py-3 text-gray-200 transition duration-300 hover:underline focus:underline focus:outline-none"
                style={{ textUnderlineOffset: "8px" }}
              >
                Projects
              </a>
              <a
                href="/contact"
                className="focus:text-yellow-500 hover:text-yellow-500 mt-1 block cursor-pointer py-3 text-gray-100 transition duration-300 hover:underline focus:underline focus:outline-none"
                style={{ textUnderlineOffset: "8px" }}
              >
                Contact
              </a>
              <div className="md:flex">
              <a href="#">
                <div className="btn">
                  <ThemeToggler />
                </div>
              </a>
            </div>
            
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
