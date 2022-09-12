import React, { useState } from "react";
import { PricingContent } from "../Datalist";
import logo from "../assets/pricing/desktop/Group.svg";
import arrow from "../assets/shared/desktop/arrow.svg";
import group from "../assets/pricing/desktop/GroupSwitch.svg";

const Pricing = () => {
  const {
    banner,
    buttons,
    subscriptions,
    midTitle,
    featureBanners,
    betaBanner,
  } = PricingContent;

  const [toggle, setToggle] = useState(false);

  const switchprice = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="flex flex-col bg-black md:flex-row-reverse">
        <img className="flex md:hidden" src={banner.imgMb} />
        <img
          className="hidden md:flex md:w-[30%] lg:hidden"
          src={banner.imgTab}
        />
        <img
          className="hidden md:hidden lg:flex lg:w-[60%] "
          src={banner.img}
        />
        <div className="flex flex-col my-[15%] mx-[9%] md:w-[70%] lg:w-[40%]">
          <h1 className="text-[32px] my-[5%] text-white uppercase font-bold tracking-[3.33px]">
            {banner.title}
          </h1>
          <p className="text-[15px] text-white leading-[25px] opacity-60">
            {banner.description}
          </p>
        </div>
      </div>
      <div className="flex mx-[15%] justify-between  my-[10%] xl:mt-[8%] xl:mb-10 xl:mx-[40%]">
        <span className="flex text-black text-lg font-bold ">{buttons.a}</span>

        <button className="flex relative">
          <img
            className="absolute top-0 right-0"
            style={{ display: toggle ? "block" : "none" }}
            onClick={() => setToggle(!toggle)}
            src={group}
          />
          <img
            // style={{ display: toggle ? "none" : "block" }}
            onClick={() => setToggle(!toggle)}
            src={logo}
          />
        </button>
        <span className="flex text-black text-lg font-bold">{buttons.b}</span>
      </div>

      <div className="flex flex-col  xl:flex-row xl:justify-center">
        {subscriptions.map((item, id) => (
          <>
            <div
              style={{
                backgroundColor: id % 2 !== 0 ? "black" : "#f5f5f5",
                color: id % 2 !== 0 ? "white" : "black",
              }}
              className="flex flex-col space-y-2  my-[3%] py-[10%]  md:pt-9 md:pb-2 text-center bg-[#f5f5f5] mx-[5%] md:flex-row  md:my-3 xl:space-y-10  xl:flex-col xl:mx-2 xl:py-10 "
            >
              <div className="flex flex-col  xl:mt-10 md:space-x-10 xl:space-y-6 xl:py-5 xl:w-[350px] ">
                <h1 className="text-[24px] font-bold pb-2 md:text-left md:mx-[8%] lg:text-center ">
                  {item.title}
                </h1>
                <p className="flex text-[15px] mx-[5%] pb-5 opacity-60 md:text-left md:mx-[8%] md:pb-0 md:w-[55%] xl:text-center xl:w-[80%]">
                  {item.description}
                </p>
                {/* button hidden on desktop */}
                <button
                  style={{
                    backgroundColor: id % 2 !== 0 ? "#f5f5f5" : "black",
                    color: id % 2 !== 0 ? "black" : "white",
                  }}
                  className="hidden text-white bg-black uppercase text-xs tracking-[2px] font-bold justify-center my-[10%] py-3 md:my-[7%] md:mx-[8%] md:w-[278px] md:flex lg:hidden"
                >
                  {item.button}
                </button>
              </div>

              {/* price-container */}
              {toggle ? (
                <div className="flex flex-col pb-[10%] mr-[5%]">
                  <span className="text-[40px]  uppercase tracking-[4.16px] font-bold">
                    {item.pricePerYearly}
                  </span>
                  <p className="flex justify-center  text-[15px] opacity-60">
                    {item.periodY}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col pb-[10%] mr-[5%]">
                  <span className="text-[40px]  uppercase tracking-[4.16px] font-bold">
                    {item.pricePerMonth}
                  </span>
                  <p className="flex justify-center  text-[15px] opacity-60">
                    {item.periodM}
                  </p>
                </div>
              )}

              <button
                style={{
                  backgroundColor: id % 2 !== 0 ? "#f5f5f5" : "black",
                  color: id % 2 !== 0 ? "black" : "white",
                }}
                className="flex cursor-pointer text-white bg-black uppercase text-xs tracking-[2px] font-bold justify-center my-[10%] py-3 md:hidden  mx-[15%]  lg:mx-10 lg:flex"
              >
                {item.button}
              </button>
            </div>
          </>
        ))}
      </div>

      <h1 className="hidden md:flex md:mt-[10%]  justify-center text-[40px]  uppercase font-bold tracking-[4.16px]">
        Compare
      </h1>

      <div className="flex flex-col mx-[7%] xl:mx-[25%] ">
        <div className="md:flex">
          <h1 className="flex text-xs font-bold uppercase mt-[15%] md:mt-[10%] tracking-[2px] md:w-full []">
            {midTitle.featureTitle}
          </h1>
          <div className="hidden md:flex md:justify-end md:mt-[10%] text-xs font-bold  uppercase tracking-[2px] space-x-[20%] w-full">
            <span className="flex w-full">{featureBanners[0].a}</span>
            <span className="flex w-full">{featureBanners[0].b}</span>
            <span className="flex w-full">{featureBanners[0].c}</span>
          </div>
        </div>

        <hr className="border-x border-solid  border-[#000000] my-5" />
        <div className="flex flex-col md:my-[10%]">
          {featureBanners.map((item) => (
            <>
              <div className="flex flex-col md:flex-row md:justify-between ">
                <h3 className="text-xs tracking-[2px] uppercase font-bold text-black md:w-full">
                  {item.posting}
                </h3>
                {/* features container */}
                <div className="flex flex-col my-4 md:my-0 md:justify-between md:w-full">
                  <div className="flex flex-row text-[10px] font-bold uppercase traking-[1.66px] opacity-50  justify-between md:hidden">
                    <span>{item.a}</span>
                    <span>{item.b}</span>
                    <span>{item.c}</span>
                  </div>
                  <div className="flex flex-row justify-between md:space-x-20 my-1">
                    <img src={item.imgA} />
                    <img src={item.imgB} />
                    <img src={item.imgC} />
                  </div>
                  <hr className="border-x border-solid  border-[#dfdfdf] md:hidden my-5" />
                </div>
              </div>
              <div className="flex flex-col">
                <hr className="hidden md:flex border-x border-solid  border-[#dfdfdf]  my-5" />
              </div>
            </>
          ))}
        </div>
      </div>

      {/* beta banner */}

      <div className="flex flex-col relative mt-8">
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

export default Pricing;
