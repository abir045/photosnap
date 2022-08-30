import React from "react";
import { homeContent } from "../Datalist";

const Home = () => {
  const { stories } = homeContent;
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
          <button className="flex w-[72%] text-white font-bold uppercase">
            {homeContent.banner.button}
          </button>
        </div>
        <div className="flex flex-row w-[60%]">
          <img className="w-full" src={homeContent.banner.img} />
        </div>
      </div>

      {/* stories */}
      <div className="flex justify-between bg-white">
        <div className="flex flex-row w-[60%]">
          <img className="w-full" src={homeContent.bannerStories.img} />
        </div>

        <div className="flex flex-col  items-center  w-[40%] mt-[10%] ">
          <h1 className="text-black text-4xl uppercase font-bold leading-12 p-4 w-[80%] mx-auto">
            {homeContent.bannerStories.heading}
          </h1>
          <p className="flex text-sm w-[80%] p-4 text-black opacity-50">
            {homeContent.bannerStories.body}
          </p>
          <button className="flex w-[72%] text-black  font-bold uppercase">
            {homeContent.bannerStories.button}
          </button>
        </div>
      </div>

      <div className="flex justify-between bg-white">
        <div className="flex flex-col  items-center  w-[40%] mt-[10%] ">
          <h1 className="text-black text-4xl uppercase font-bold leading-12 p-4 w-[80%] mx-auto">
            {homeContent.bannerDesign.heading}
          </h1>
          <p className="flex text-sm w-[80%] p-4 text-black opacity-50">
            {homeContent.bannerDesign.body}
          </p>
          <button className="flex w-[72%] font-bold text-black uppercase">
            {homeContent.bannerDesign.button}
          </button>
        </div>
        <div className="flex flex-row w-[60%]">
          <img className="w-full" src={homeContent.bannerDesign.img} />
        </div>
      </div>
      {/* stories cards */}
      <div className="flex relative">
        {stories.map((item) => (
          <div className="flex flex-col ">
            <img src={item.img} />
            <h2 className="absolute text-lg bottom-[30%] mx-[2%] font-bold  text-white uppercase">
              {" "}
              {item.title}
            </h2>
            <p className="absolute bottom-[23%] mx-[2%] text-sm  text-white">
              {item.photographer}
            </p>
            <hr className="absolute w-[20%] bottom-[15%] mx-[2%] border-white opacity-50 border-1 " />
            <button className="absolute text-xs bottom-[5%] mx-[2%]  text-white uppercase">
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
