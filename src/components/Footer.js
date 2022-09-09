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
    <div className="flex flex-col py-[5%]  bg-black mx-auto items-center justify-between md:py-[15%]">
      <div className="flex flex-col space-y-8  my-[10%]">
        <img className="flex text-white mx-auto w-[170px] " src={logo} />

        {/* icon container */}
        <div className="flex  space-x-4 justify-center">
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

        <ul className="flex flex-col  pb-[25%] text-center text-xs space-y-4 text-white font-bold uppercase tracking-[2px] md:space-x-4  md:flex-row">
          <li className="hover:opacity-30">home</li>
          <li className="hover:opacity-30">stories</li>
          <li className="hover:opacity-30">features</li>
          <li className="hover:opacity-30">pricing</li>
        </ul>

        <div className="flex space-x-3 mx-auto  md:mr-[5%]">
          <button className="flex text-xs font-bold uppercase text-white tracking-[2px] hover:underline">
            get an invite
          </button>
          <img className="flex" src={arrow} alt="arrow" />
        </div>

        <p className="flex opacity-50 text-white text-[15px]">
          Copyright 2019. All Rights Reserved
        </p>
      </div>
      {/* links */}
    </div>
  );
};

export default Footer;
