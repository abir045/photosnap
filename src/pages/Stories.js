import React from "react";
import { StoriesContent } from "../Datalist";
import arrow from "../assets/shared/desktop/arrow.svg";

const Stories = () => {
  return (
    <>
      <div className="flex flex-col mb-[25%] md:mb-[30%]  xl:mb-[30%]  xl:py-5 h-[495px]  md:py-5 md:h-[650px] xl:h-[650px]">
        <div className="flex flex-col  relative ">
          <img
            className="hidden xl:flex   w-full "
            src={StoriesContent.banner.img}
          />
          <img
            className="hidden lg:hidden md:flex"
            src={StoriesContent.banner.imgTab}
          />
          <img
            className="flex  lg:hidden md:hidden"
            src={StoriesContent.banner.imgMobile}
          />

          <div className="absolute top-[100%] bg-black py-5  md:bg-transparent w-full px-10 md:top-[15%] text-white md:mx-[5%]">
            <h5 className="text-xs uppercase font-bold tracking-[2px]  pt-5 ">
              {StoriesContent.banner.heading}
            </h5>
            <h1 className="font-bold text-[32px] w-[70%] tracking-[3.33px] leading-[40px] md:text-[40px] md:leading-[48px] uppercase mt-5 md:tracking-[4.166px] md:w-[40%] xl:text-[40px] xl:leading-[48px] xl:w-[25%]">
              {StoriesContent.banner.headingTitle}
            </h1>
            <div className="flex  space-x-3 my-2">
              <p className="opacity-75 text-[13px]">
                {StoriesContent.banner.date}
              </p>
              <span className="text-[13px]">
                {StoriesContent.banner.photographer}
              </span>
            </div>
            <p className="text-white text-[15px] leading-[25px] my-5  opacity-60 w-full md:w-[55%] xl:w-[25%] ">
              {StoriesContent.banner.body}
            </p>

            <div className="flex space-x-3  md:my-[5%] h-full pb-10">
              <button className="uppercase text-xs tracking-[2px]">
                {StoriesContent.banner.button}
              </button>

              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>

        {/* <img src={} alt="cover" /> */}
      </div>

      {/* tab  */}

      <div className="grid grid-flow-row mt-[35%] pt-[40%] md:mt-[-70%] xl:grid-rows-4 xl:grid-cols-4  lg:grid-rows-4 lg:grid-cols-4  md:grid-cols-2 md:grid-rows-8">
        {StoriesContent.photos.map((item, id) => (
          <div
            key={id}
            className="grid grid-cols-1 relative  w-full xl:grid-cols-1 "
          >
            <img className="w-full  hover:-translate-y-5" src={item.img} />
            <div className="absolute left-[5%] top-[70%] md:top-[70%] lg:top-[60%] xl:top-[70%]">
              <p className="text-white text-[13px]">{item.date}</p>
              <p className="text-white text-xl font-bold">{item.title}</p>
              <p className="text-white text-[13px] my-2">{item.photographer}</p>

              <hr className="border-white w-[300px] opacity-25 mb-3 md:w-[200px] border-1 " />

              <div className="flex justify-between">
                <p className="text-white uppercase text-xs font-bold tracking-[2px]">
                  {item.button}
                </p>

                <img className="flex" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-col md:flex-row">
        {StoriesContent.photos.slice(1, 2).map((item) =>
          item.map((item, id) => {
            return (
              <div key={id} className="flex  w-full relative">
                <img className="w-full" src={item.img} />

                <div className="absolute left-[5%] top-[70%] md:top-[50%] xl:top-[70%]">
                  <p className="text-white text-[13px]">{item.date}</p>
                  <p className="text-white text-xl font-bold">{item.title}</p>

                  <p className="text-white text-[13px] my-2">
                    {item.photographer}
                  </p>

                  <hr className="border-white w-[300px] opacity-25 mb-3 md:w-[250px]  border-1 " />

                  <div className="flex justify-between">
                    <p className="text-white uppercase text-xs font-bold tracking-[2px]">
                      {item.button}
                    </p>

                    <img className="flex" src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div> */}

      {/* <div className="flex flex-col md:flex-row">
        {StoriesContent.photos.slice(2, 3).map((item) =>
          item.map((item, id) => {
            return (
              <div key={id} className="flex w-full relative">
                <img className="w-full" src={item.img} />

                <div className="absolute left-[5%] top-[70%] md:top-[50%] xl:top-[70%]">
                  <p className="text-white text-[13px]">{item.date}</p>
                  <p className="text-white font-bold text-xl">{item.title}</p>
                  <p className="text-white text-[13px] my-2">
                    {item.photographer}
                  </p>

                  <hr className="border-white w-[300px] opacity-25 mb-3 md:w-[250px]  border-1 " />

                  <div className="flex justify-between">
                    <p className="text-white uppercase text-xs font-bold tracking-[2px]">
                      {item.button}
                    </p>

                    <img className="flex" src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div> */}

      {/* <div className="flex flex-col md:flex-row">
        {StoriesContent.photos.slice(3, 4).map((item) =>
          item.map((item, id) => {
            return (
              <div key={id} className="flex w-full relative">
                <img className="w-full" src={item.img} />

                <div className="absolute left-[5%] top-[70%] md:top-[50%] xl:top-[70%]">
                  <p className="text-white">{item.date}</p>
                  <p className="text-white">{item.title}</p>
                  <p className="text-white text-[13px] my-2">
                    {item.photographer}
                  </p>

                  <hr className="border-white w-[300px] opacity-25 mb-3 md:w-[250px]  border-1 " />

                  <div className="flex justify-between">
                    <p className="text-white uppercase text-xs font-bold tracking-[2px]">
                      {item.button}
                    </p>

                    <img className="flex" src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div> */}
    </>
  );
};

export default Stories;
