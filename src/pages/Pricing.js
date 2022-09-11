import React from "react";
import { PricingContent } from "../Datalist";
import logo from "../assets/pricing/desktop/Group.svg";
import arrow from "../assets/shared/desktop/arrow.svg";

const Pricing = () => {
  const {
    banner,
    buttons,
    subscriptions,
    midTitle,
    featureBanners,
    betaBanner,
  } = PricingContent;

  return (
    <div>
      <div className="flex flex-col bg-black">
        <img src={banner.imgMb} />
        <div className="flex flex-col my-[15%] mx-[9%]">
          <h1 className="text-[32px] my-[5%] text-white uppercase font-bold tracking-[3.33px]">
            {banner.title}
          </h1>
          <p className="text-[15px] text-white leading-[25px] opacity-60">
            {banner.description}
          </p>
        </div>
      </div>
      <div className="flex mx-[15%] justify-between  my-[10%]">
        <span className="flex text-black text-lg font-bold ">{buttons.a}</span>
        <button className="flex">
          <img src={logo} />
        </button>
        <span className="flex text-black text-lg font-bold">{buttons.b}</span>
      </div>

      <div className="flex flex-col">
        {subscriptions.map((item, id) => (
          <div
            style={{
              backgroundColor: id % 2 !== 0 ? "black" : "#f5f5f5",
              color: id % 2 !== 0 ? "white" : "black",
            }}
            className="flex flex-col space-y-2 my-[3%] py-[10%] text-center bg-[#f5f5f5] mx-[8%]"
          >
            <h1 className="text-[24px]  font-bold pb-2">{item.title}</h1>
            <p className="text-[15px] mx-[5%] pb-5 opacity-60">
              {item.description}
            </p>
            <div className="flex flex-col pb-[10%]">
              <span className="text-[40px]  uppercase tracking-[4.16px] font-bold">
                {item.pricePerMonth}
              </span>
              <p className="flex justify-center  text-[15px] opacity-60">
                per month
              </p>
            </div>

            <button
              style={{
                backgroundColor: id % 2 !== 0 ? "#f5f5f5" : "black",
                color: id % 2 !== 0 ? "black" : "white",
              }}
              className="flex text-white bg-black uppercase text-xs tracking-[2px] font-bold justify-center my-[10%] py-3  mx-[15%]"
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col mx-[7%]">
        <h1 className="text-xs font-bold uppercase mt-[15%] tracking-[2px]">
          {midTitle.featureTitle}
        </h1>
        <hr className="border-x border-solid  border-[#000000] my-5" />
        <div className="flex flex-col">
          {featureBanners.map((item) => (
            <div className="flex flex-col">
              <h3 className="text-xs tracking-[2px] uppercase font-bold text-black">
                {item.posting}
              </h3>
              {/* features container */}
              <div className="flex flex-col my-4">
                <div className="flex flex-row text-[10px] font-bold uppercase traking-[1.66px] opacity-50  justify-between">
                  <span>{item.a}</span>
                  <span>{item.b}</span>
                  <span>{item.c}</span>
                </div>
                <div className="flex flex-row justify-between  my-1">
                  <img src={item.imgA} />
                  <img src={item.imgB} />
                  <img src={item.imgC} />
                </div>
                <hr className="border-x border-solid  border-[#dfdfdf] my-5" />
              </div>
            </div>
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
