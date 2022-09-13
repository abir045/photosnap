import React, { useState, useRef } from "react";
import logo from "../assets/shared/desktop/logo.svg";
import menu from "../assets/shared/mobile/menu.svg";
import close from "../assets/shared/mobile/close.svg";

const Navbar = () => {
  const [displayNav, setDisplayNav] = useState(false);

  const navRef = useRef();

  const closeNav = (event) => {
    if (navRef.current === event.target) {
      setDisplayNav(false);
    }
  };

  return (
    <>
      <div className="hidden md:flex justify-around my-4 items-center">
        <a href="/">
          <img className="flex" src={logo} />{" "}
        </a>

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

      <div className="flex mx-[5%]  justify-between items-center h-[72px] relative md:hidden">
        <img src={logo} />
        <img
          className="absolute top-0 right-0"
          style={{ display: displayNav ? "block" : "none" }}
          onClick={() => setDisplayNav(!displayNav)}
          src={close}
        />
        <img
          onClick={() => setDisplayNav(!displayNav)}
          className="w-[20px] h-[6px]"
          src={menu}
          style={{ display: displayNav ? "none" : "block" }}
        />
      </div>
      <div>
        {displayNav ? (
          <div
            display={displayNav}
            ref={navRef}
            onClick={closeNav}
            className="flex flex-col z-99 mt-[15%] mb-[10%] text-center"
          >
            <ul className="text-[15px] space-y-5 font-bold tracking-[2.5px]  uppercase  ">
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
            <hr className=" border-black opacity-25  border-x mx-[9%] my-5" />

            <button className="text-white  h-[48px] text-[15px] bg-black p-3 uppercase items-center  mx-[9%]  hover:text-black  hover:bg-[#dfdfdf] tracking-[2px]">
              get an invite
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
