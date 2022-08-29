import React from "react";
import { homeContent } from "../Datalist";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between bg-black">
        <div className="flex flex-col  items-center  w-[40%] mt-[10%] ">
          <h1 className="text-white text-4xl uppercase font-bold leading-12 p-4 w-[80%] mx-auto">
            {homeContent.banner.heading}
          </h1>
          <p className="flex text-sm w-[80%] p-4 text-[#dfdfdf] opacity-50">
            {homeContent.banner.body}
          </p>
          <button className="flex w-[72%] text-white uppercase">
            {homeContent.banner.button}
          </button>
        </div>
        <div className="flex flex-row w-[60%]">
          <img className="w-full" src={homeContent.banner.img} />
        </div>
      </div>
    </div>
  );
};

export default Home;
