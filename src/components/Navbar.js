import React from "react";
import logo from "../assets/shared/desktop/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-around my-10 items-center">
      <img className="flex" src={logo} />
      <ul className="flex space-x-10 text-xs font-bold uppercase  ">
        <li className="hover:text-[#dfdfdf] cursor-pointer">stories</li>
        <li className="hover:text-[#dfdfdf] cursor-pointer">features</li>
        <li className="hover:text-[#dfdfdf] cursor-pointer">pricing</li>
      </ul>
      <button className="flex text-white text-xs bg-black uppercase p-3 h-[40px] rounded hover:text-black  hover:bg-[#dfdfdf] tracking-[2px]">
        get an invite
      </button>
    </div>
  );
};

export default Navbar;