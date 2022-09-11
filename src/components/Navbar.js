import React from "react";
import logo from "../assets/shared/desktop/logo.svg";
import menu from "../assets/shared/mobile/menu.svg";

const Navbar = () => {
  return (
    <>
      <div className="hidden md:flex justify-around my-5 items-center">
        <img className="flex" src={logo} />
        <ul className="flex space-x-10 text-xs font-bold uppercase  ">
          <li className="hover:text-[#dfdfdf] cursor-pointer">
            <a href="/stories">stories</a>
          </li>
          <li className="hover:text-[#dfdfdf] cursor-pointer">
            <a href="/features">features</a>
          </li>
          <li className="hover:text-[#dfdfdf] cursor-pointer">
            <a href="/pricing">pricing</a>
          </li>
        </ul>
        <button className="flex text-white text-xs bg-black uppercase p-3 h-[40px] rounded hover:text-black  hover:bg-[#dfdfdf] tracking-[2px]">
          get an invite
        </button>
      </div>

      <div className="flex mx-[5%] my-5 justify-between items-center md:hidden">
        <img src={logo} />
        <img className="w-[20px] h-[6px]" src={menu} />
      </div>
    </>
  );
};

export default Navbar;
