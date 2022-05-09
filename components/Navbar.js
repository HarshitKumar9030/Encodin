import React from "react";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon, EditInactiveIcon } from "@heroicons/react/solid"


const Navbar = () => {
  const [isActive, setActive] = useState(true);
  const DropdownToggle = () => {
  setActive(!isActive); 
 };
  return (
    <main className="fixed w-full top-[37px] shadow-gray-100 shadow-md selection:text-blue-800 bg-white ">
      <div className="navBar flex cursor-pointer flex-row py-3 md:py-0">
      <Link href='/'><span className="navImg relative flex">
          <img
            className=" bg-transparent max-w-fit pl-0 pt-0 ml-4 md:p-[16px]"
            src="/Logo.svg"
          />
        </span></Link>
        <span className="hidden navItems  content-center flex-wrap ">
          <ul className="flex text-light-text-gray text-[20px] sm:text-[18px] md:text-[14px] flex-row space-x-4 duration-100 ">
            <Menu as="div" className={`cursor-pointer fixed top-12 mt-[7.3px]`}>
              <Menu.Button onClick={DropdownToggle} className={isActive ? `button-san-nav px-2 py-2 flex flex-row hover:bg-gray-hover-bg active:bg-gray-hover-bg duration-300  rounded-lg hover:text-cyan-text` : `niwh button-san-nav px-2 py-2 flex flex-row bg-gray-hover-bg text-cyan-text duration-300  rounded-lg`}>Community{" "}
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`duration-300 flex content-center mt-2 ml-[6px] niwh`}
              >
                <path
                  d="M9 1L5 5L1 0.999999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              </Menu.Button>
              <Menu.Items>Hello</Menu.Items>
              <Menu.Items>Hello</Menu.Items>
              <Menu.Items>Hello</Menu.Items>
              <Menu.Items>Hello</Menu.Items>
              <Menu.Items>Hello</Menu.Items>
              <Menu.Items>Hello</Menu.Items>
              <Menu.Items>Hello</Menu.Items>
            </Menu>{" "}
          </ul>
        </span>
        
        <div className="navButtons hidden flex-row mr-0 right-[128px] absolute md:mt-4 md:mr-6 space-x-1 md:space-x-2 content-center flex-wrap items-center">
          <button>
            <div className="login text-light-text-gray hover:text-cyan-text hover:bg-gray-hover-bg font-[400px] rounded-[8px] text-[16px] px-2 sm:px-3 md:px-5 py-2">
            <Link href='/login'>Log In</Link>
            </div>
          </button>
          <button>
            <div className="signup py-2 rounded-[8px] text-white bg-cyan-text px-5 md:px-5">
            <Link href='signup'>Sign Up</Link>
            </div>
          </button>
          
        </div>
        <div className="fNQgRF"></div>
        <div className="hd83dg cursor-pointer absolute right-[24px] flex">
          <img className="mt-[3px] md:mt-[19px]" src="/Hamburger.svg" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Navbar;
