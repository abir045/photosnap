import React from "react";
import { StoriesContent } from "../Datalist";
import arrow from "../assets/shared/desktop/arrow.svg";
import PhotoAlbum from "react-photo-album";

const Stories = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col   relative ">
          <img className="hidden lg:flex" src={StoriesContent.banner.img} />
          <img
            className="hidden lg:hidden md:flex"
            src={StoriesContent.banner.imgTab}
          />
          <img
            className="flex lg:hidden md:hidden"
            src={StoriesContent.banner.imgMobile}
          />

          <div className="absolute top-[100%] bg-black md:bg-transparent w-full py-10  px-10   md:top-[15%] text-white  md:mx-[5%]">
            <h5 className="text-xs uppercase font-bold tracking-[2px] my-5">
              {StoriesContent.banner.heading}
            </h5>
            <h1 className="font-bold text-[32px] w-[70%] tracking-[3.-[40px] uppercase md:tracking-[4.166px] md:w-[40%] xl:w-[25%]">
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
            <p className="my-5 text-white text-base opacity-60 md:w-[60%] xl:w-[30%] ">
              {StoriesContent.banner.body}
            </p>

            <div className="flex space-x-3">
              <button className="uppercase text-xs tracking-[2px]">
                {StoriesContent.banner.button}
              </button>
              -
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>

        {/* <img src={} alt="cover" /> */}
      </div>
      <div className="flex  w-full">
        {StoriesContent.photos.slice(0, 1).map((item) =>
          item.map((item, id) => {
            return (
              <div key={id} className="flex w-full relative">
                <img className="w-full" src={item.img} />

                <div className="absolute left-[5%] top-[70%]">
                  <p className="text-white">{item.date}</p>
                  <p className="text-white">{item.title}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="flex">
        {StoriesContent.photos.slice(1, 2).map((item) =>
          item.map((item, id) => {
            return (
              <div key={id} className="flex w-full relative">
                <img className="w-full" src={item.img} />

                <div className="absolute left-[5%] top-[70%]">
                  <p className="text-white">{item.date}</p>
                  <p className="text-white">{item.title}</p>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="flex">
        {StoriesContent.photos.slice(2, 3).map((item) =>
          item.map((item, id) => {
            return (
              <div key={id} className="flex w-full relative">
                <img className="w-full" src={item.img} />

                <div className="absolute left-[5%] top-[70%]">
                  <p className="text-white">{item.date}</p>
                  <p className="text-white">{item.title}</p>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="flex">
        {StoriesContent.photos.slice(3, 4).map((item) =>
          item.map((item, id) => {
            return (
              <div key={id} className="flex w-full relative">
                <img className="w-full" src={item.img} />

                <div className="absolute left-[5%] top-[70%]">
                  <p className="text-white">{item.date}</p>
                  <p className="text-white">{item.title}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Stories;
