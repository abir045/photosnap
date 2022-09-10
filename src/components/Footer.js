import React, { useState } from "react";
import Facebook from "../assets/shared/desktop/facebook.svg";
import youtube from "../assets/shared/desktop/youtube.svg";
import twitter from "../assets/shared/desktop/twitter.svg";
import pinterest from "../assets/shared/desktop/pinterest.svg";
import instagram from "../assets/shared/desktop/instagram.svg";
import logo from "../assets/shared/desktop/logoFooter.svg";
import fbHover from "../assets/shared/desktop/fbHover.svg";
import arrow from "../assets/shared/desktop/arrow.svg";
import youtubeHover from "../assets/shared/desktop/youtubeHover.svg";
import twitterHover from "../assets/shared/desktop/twitterHover.svg";
import pinterestHover from "../assets/shared/desktop/pinterestHover.svg";
import instagramHover from "../assets/shared/desktop/instagramHover.svg";

const Footer = () => {
  return (
    <div className="flex flex-col py-5 md:py-[5%]  bg-black  justify-between">
      {/* tablet */}
      <div className="flex flex-col space-y-8 md:space-y-5 ">
        <div className="hidden my-7 md:flex md:justify-between md:mx-[5%]">
          {/* logo */}
          <img className="flex text-white w-[170px] mb-2" src={logo} />
          {/* button */}
          <div className="flex space-x-3">
            <button className="flex text-xs font-bold uppercase text-white tracking-[2px] hover:underline">
              get an invite
            </button>
            <img className="flex w-[42px] h-[12px]" src={arrow} alt="arrow" />
          </div>
        </div>

        <ul className="hidden text-xs text-white font-bold uppercase tracking-[2px] md:space-x-5 md:mx-[5%] md:pb-[5%] md:flex">
          <li className="hover:opacity-30">home</li>
          <li className="hover:opacity-30">stories</li>
          <li className="hover:opacity-30">features</li>
          <li className="hover:opacity-30">pricing</li>
        </ul>

        <div className="hidden  space-x-4  md:pb-0 pb-[15%] md:mx-[5%] md:justify-between md:flex">
          <div className="flex space-x-3">
            {/* fb logo */}
            <div className="flex relative">
              <img className="absolute top-0  hover:opacity-0" src={Facebook} />
              <img className="hover:opacity-100" src={fbHover} />
            </div>
            {/* youtube logo */}
            <div className="flex relative">
              <img
                className="absolute top-0  hover:opacity-0 cursor-pointer"
                src={youtubeHover}
              />
              <img className="hover:opacity-100" src={youtube} />
            </div>

            {/* twitter logo */}
            <div className="flex relative">
              <img
                className="absolute top-0  hover:opacity-0"
                src={twitterHover}
              />
              <img className=" hover:opacity-100" src={twitter} />
            </div>

            <div className="flex relative">
              <img
                className="absolute top-0  hover:opacity-0"
                src={pinterestHover}
              />
              <img className="hover:opacity-100" src={pinterest} />
            </div>

            <div className="flex relative">
              <img
                className="absolute top-0  hover:opacity-0"
                src={instagramHover}
                alt="instagram"
              />
              <img className="hover:opacity-100" src={instagram} />
            </div>
          </div>

          <p className="flex opacity-50 text-white text-[15px]">
            Copyright 2019. All Rights Reserved
          </p>
        </div>

        <img
          className="flex text-white mx-auto  w-[170px] md:hidden"
          src={logo}
        />

        {/* icon container */}
        <div className="flex  space-x-4 justify-center pb-[5%] md:pb-[5%]  md:hidden">
          {/* fb logo */}
          <div className="flex relative">
            <img className="absolute top-0  hover:opacity-0" src={Facebook} />
            <img className="hover:opacity-100" src={fbHover} />
          </div>
          {/* youtube logo */}
          <div className="flex relative">
            <img
              className="absolute top-0  hover:opacity-0 cursor-pointer"
              src={youtubeHover}
            />
            <img className="hover:opacity-100" src={youtube} />
          </div>

          {/* twitter logo */}
          <div className="flex relative">
            <img
              className="absolute top-0  hover:opacity-0"
              src={twitterHover}
            />
            <img className=" hover:opacity-100" src={twitter} />
          </div>

          <div className="flex relative">
            <img
              className="absolute top-0  hover:opacity-0"
              src={pinterestHover}
            />
            <img className="hover:opacity-100" src={pinterest} />
          </div>

          <div className="flex relative">
            <img
              className="absolute top-0  hover:opacity-0"
              src={instagramHover}
              alt="instagram"
            />
            <img className="hover:opacity-100" src={instagram} />
          </div>
        </div>

        <ul className="flex flex-col pb-[20%] text-center text-xs space-y-4 text-white font-bold uppercase tracking-[2px] md:space-x-5 md:hidden">
          <li className="hover:opacity-30">home</li>
          <li className="hover:opacity-30">stories</li>
          <li className="hover:opacity-30">features</li>
          <li className="hover:opacity-30">pricing</li>
        </ul>

        <div className="flex space-x-3 mx-auto md:hidden">
          <button className="flex text-xs font-bold uppercase text-white tracking-[2px] hover:underline">
            get an invite
          </button>
          <img className="flex" src={arrow} alt="arrow" />
        </div>

        <p className="flex opacity-50 justify-center pb-[10%] text-white text-[15px] md:hidden">
          Copyright 2019. All Rights Reserved
        </p>
      </div>
      {/* links */}
    </div>
  );
};

export default Footer;
