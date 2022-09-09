import React from "react";
import { FeaturesContent } from "../Datalist";
import arrow from "../assets/shared/desktop/arrow.svg";

const Features = () => {
  const { featureBanners, betaBanner } = FeaturesContent;
  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse">
        <img
          className="flex md:hidden lg:hidden"
          src={FeaturesContent.banner.imgMobile}
        />
        <img
          className="hidden md:flex md:w-[30%] lg:hidden"
          src={FeaturesContent.banner.imgTab}
        />
        <img
          className="hidden md:hidden lg:flex"
          src={FeaturesContent.banner.img}
        />

        <div className="flex flex-col md:w-[70%] bg-black text-white py-[15%]">
          <h1 className="mx-[10%] text-[32px] tracking-[3.33px] font-bold uppercase my-5">
            {FeaturesContent.banner.heading}
          </h1>
          <p className="mx-[10%] text-base opacity-60">
            {FeaturesContent.banner.headingTitle}{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:mx-[5%] xl:mx-[5%] lg:grid-cols-3 items-center">
        {featureBanners.map((item) => {
          return (
            <div className="flex flex-col mt-[20%]">
              <img
                className="w-[72px] h-[72px]  mb-[5%] mx-auto"
                src={item.img}
              />
              <h1 className="mx-auto text-lg font-bold my-[5%] ">
                {item.title}
              </h1>
              <p className="text-center text-[15px] opacity-60 mx-10 ">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col  mt-[20%] relative">
        <img
          className="flex md:hidden"
          src={betaBanner.imgMobile}
          alt="beta banner"
        />

        <img
          className="hidden md:flex lg:hidden"
          src={betaBanner.imgTab}
          alt="beta banner"
        />

        <img
          className="hidden md:hidden lg:flex"
          src={betaBanner.img}
          alt="beta banner"
        />
        <div className="flex flex-col absolute  top-[30%]  ml-[10%] md:flex-row md:mx-[5%] md:justify-between">
          <h1 className="flex text-white  font-bold uppercase text-[32px] leading-10 traking-[3.33px] w-[80%] mb-5 md:w-[50%] md:text-[40px]">
            {betaBanner.title}
          </h1>
          <div className="flex space-x-3 md:items-center md:justify-end md:mr-0">
            <button className="flex text-white text-xs font-bold tracking-[2px] uppercase">
              {betaBanner.button}
            </button>
            <img className="flex w-[42px] h-[12px]" src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
