import React from "react";
import { PricingContent } from "../Datalist";
import logo from "../assets/pricing/desktop/Group.svg";

const Pricing = () => {
  const { banner, buttons } = PricingContent;

  return (
    <div>
      <div className="flex flex-col bg-black">
        <img src={banner.imgMb} />
        <div className="flex flex-col my-[15%] mx-[10%]">
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
    </div>
  );
};

export default Pricing;
