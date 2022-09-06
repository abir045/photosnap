import React from "react";
import { StoriesContent } from "../Datalist";
import arrow from "../assets/shared/desktop/arrow.svg";

const Stories = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col my-5 relative ">
        <img src={StoriesContent.banner.img} />

        <div className="absolute top-[15%] text-white mx-[5%]">
          <h5 className="text-xs uppercase font-bold tracking-[2px] my-5">
            {StoriesContent.banner.heading}
          </h5>
          <h1 className="font-bold text-[40px] uppercase tracking-[4.166px] xl:w-[25%]">
            {StoriesContent.banner.headingTitle}
          </h1>
          <div className="flex  space-x-3 my-5">
            <p className="opacity-75 text-[13px]">
              {StoriesContent.banner.date}
            </p>
            <span className="text-[13px]">
              {StoriesContent.banner.photographer}
            </span>
          </div>
          <p className="my-5 text-white text-base opacity-60 xl:w-[30%] ">
            {StoriesContent.banner.body}
          </p>

          <div className="flex space-x-3">
            <button className="uppercase text-xs tracking-[2px]">
              {StoriesContent.banner.button}
            </button>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>

      {/* <img src={} alt="cover" /> */}
    </div>
  );
};

export default Stories;
