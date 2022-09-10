import React from "react";
import { PricingContent } from "../Datalist";
import logo from "../assets/pricing/desktop/Group.svg";

const Pricing = () => {
  const { banner, buttons, subscriptions } = PricingContent;

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
              className="flex text-white bg-black uppercase text-xs tracking-[2px] font-bold justify-center my-[10%] py-3 bg-black mx-[15%]"
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
