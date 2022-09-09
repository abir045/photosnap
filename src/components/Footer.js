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
    <div className="flex my-15 py-10 bg-black  items-center justify-between md:py-[15%]">
      <div className="flex-col space-y-10 md:mx-[5%]">
        <img className="flex text-white" src={logo} />

        <div className="flex my-5 space-x-4 ">
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
            <img className=" hover:opacity-100" src={pinterest} />
          </div>

          <div className="flex relative">
            <img
              className="absolute top-0  hover:opacity-0"
              src={instagramHover}
            />
            <img className="hover:opacity-100" src={instagram} />
          </div>
        </div>
      </div>
      {/* links */}
      <ul className="flex flex-col ml-[-20%]  text-xs space-y-2 text-white font-bold uppercase md:space-x-4  md:flex-row">
        <li className="hover:opacity-30">home</li>
        <li className="hover:opacity-30">stories</li>
        <li className="hover:opacity-30">features</li>
        <li className="hover:opacity-30">pricing</li>
      </ul>

      <div className="flex space-x-3 md:mr-[5%]">
        <button className="flex text-xs font-bold uppercase text-white tracking-[2px] hover:underline">
          get an invite
        </button>
        <img className="flex" src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Footer;
