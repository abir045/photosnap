import React from "react";
import { homeContent } from "../Datalist";

const Home = () => {
  const { stories, footerBanners } = homeContent;
  return (
    <div>
      <div className="flex flex-col-reverse justify-between bg-black md:flex-row">
        <div className="flex flex-col   items-center my-12   p-4 lg:w-[40%] mt-[10%] md:w-[70%]  ">
          <h1 className="flex text-white w-full text-4xl md:text-[40px]  uppercase font-bold leading-[48px] p-4  md:w-[60%] lg:ml-[40%] lg:w-[90%]  md:mr-[35%]">
            {homeContent.banner.heading}
          </h1>
          <p className="flex md:text-base w-full p-5 text-[#dfdfdf] opacity-60 md:mr-[25%] md:w-[70%] lg:w-[95%] lg:ml-[33%]">
            {homeContent.banner.body}
          </p>
          <button className="flex w-full ml-[10%]  text-white font-bold uppercase text-xs lg:ml-[25%] xl:ml-[20%]  md:ml-[12%]">
            {homeContent.banner.button}
          </button>
        </div>
        <div className="hidden lg:flex lg:w-[60%]">
          <img className="w-full" src={homeContent.banner.img} />
        </div>
        <div className="flex  flex-row md:hidden">
          <img className="w-full" src={homeContent.banner.imgMobile} />
        </div>
        <div className="hidden md:flex md:w-[30%] lg:hidden">
          <img className="w-full" src={homeContent.banner.imgTab} />
        </div>
      </div>

      {/* stories */}
      <div className="flex flex-col justify-between bg-white md:flex-row">
        <div className="hidden  lg:flex w-[60%]">
          <img className="w-full" src={homeContent.bannerStories.img} />
        </div>
        <div className="hidden  md:flex  lg:hidden">
          <img className="w-full" src={homeContent.bannerStories.imgTab} />
        </div>
        <div className="flex flex-col  md:hidden ">
          <img className="w-full" src={homeContent.bannerStories.imgMobile} />
        </div>

        <div className="flex flex-col my-12  p-4 items-center w-full md:w-[70%]  lg:w-[40%] mt-[10%] ">
          <h1 className="text-black text-4xl md:text-[40px] uppercase font-bold md:w-[60%] md:mr-[25%] mr-[3%] p-4 w-full">
            {homeContent.bannerStories.heading}
          </h1>
          <p className="flex text-sm md:text-base md:w-[85%] w-full p-4 text-black opacity-60">
            {homeContent.bannerStories.body}
          </p>
          <button className="flex text-xs w-full ml-[10%] md:ml-[20%] mt-[5%] text-black  font-bold uppercase ">
            {homeContent.bannerStories.button}
          </button>
        </div>
      </div>

      {/* designed for everyone */}
      <div className="flex flex-col-reverse justify-between  bg-white md:flex-row">
        <div className="flex flex-col  items-center w-full my-12  lg:w-[40%] mt-[10%] ">
          <h1 className="text-black text-[32px] uppercase font-bold leading-[40px] p-4 w-full md:w-[70%] ml-[10%] md:mr-[30%] ">
            {homeContent.bannerDesign.heading}
          </h1>
          <p className="flex ml-[10%] text-base w-full md:w-[80%] p-4 text-black opacity-60 md:mr-[18%]">
            {homeContent.bannerDesign.body}
          </p>
          <button className="flex w-full ml-[18%] text-xs  font-bold text-black uppercase">
            {homeContent.bannerDesign.button}
          </button>
        </div>
        <div className="hidden lg:flex flex-row lg:w-[60%] md:hidden">
          <img className="w-full" src={homeContent.bannerDesign.img} />
        </div>
        <div className="flex flex-col  md:hidden">
          <img className="w-full" src={homeContent.bannerDesign.imgMobile} />
        </div>
        <div className="hidden  md:flex md:w-[30%] lg:hidden">
          <img className="w-full" src={homeContent.bannerDesign.imgTab} />
        </div>
      </div>
      {/* stories cards */}
      <div className="flex flex-col relative md:flex-row">
        {stories.map((item) => (
          <div className="flex flex-col w-full ">
            <img className="w-full" src={item.img} />
            <h2
              className="absolute text-lg mt-[85%] pt-[20%] ml-[10%] md:bottom-[30%] md:ml-[3%]
              font-bold   text-white uppercase"
            >
              {" "}
              {item.title}
            </h2>
            <p className="absolute md:bottom-[23%]  mt-[90%] pt-[20%]  ml-[10%] md:ml-[3%] mx-[2%] text-sm  text-white">
              {item.photographer}
            </p>
            <hr className="absolute md:w-[20%] mt-[120%]  z-10  ml-[10%] md:ml-[3%] w-[80%] md:bottom-[15%]  mx-[2%] border-white opacity-50 border-1 " />
            <button className="absolute text-xs md:bottom-[5%] mt-[95%] pt-[30%] ml-[10%] md:ml-[3%]  mx-[2%]  text-white uppercase">
              {item.button}
            </button>
          </div>
        ))}
      </div>

      {/* footer banners */}

      <div className="md:flex space-x-5 items-center text-center mx-[5%]">
        {footerBanners.map((item) => {
          return (
            <div className="flex flex-col">
              <div className="mt-[30%] mb-[20%]">
                <img src={item.img} className="mx-auto w-[72px] h-[72px]" />
              </div>

              <h1 className="mt-[5%] font-bold text-lg mb-[10%]">
                {item.title}
              </h1>
              <p className="text-base opacity-60">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
