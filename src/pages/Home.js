import React from "react";
import { homeContent } from "../Datalist";
import arrow from "../assets/shared/desktop/arrow.svg";
import blackArrow from "../assets/home/mobile/blackArrow.svg";

const Home = () => {
  const { stories, footerBanners } = homeContent;
  return (
    <div>
      <div className="flex flex-col-reverse w-full  justify-between bg-black  md:flex-row md:h-[600px] ">
        {/* text banner */}
        <div className="flex flex-col items-center p-4   xl:w-[40%]  md:w-[70%] xl:h-[650px]  h-[419px] md:h-full ">
          <h1 className="flex  text-white w-[90%] text-[32px]  mt-[15%] tracking-[3.33px] leading-[40px] uppercase font-bold md:text-[40px]  md:leading-[48px] md:tracking-[4.16px] md:w-[80%]  md:mt-[30%] xl:ml-[15%] xl:w-[75%] xl:tracking-[4.16px] xl:mt-[25%]  md:mr-[5%]">
            {homeContent.banner.heading}
          </h1>
          <p className="flex md:text-[15px] leading-[25px] w-full p-4 text-[#dfdfdf] opacity-60 md:mr-[11%] md:w-[80%] md:mb-[5%] xl:w-[80%] xl:ml-[20%]">
            {homeContent.banner.body}
          </p>
          <div className="flex space-x-3 md:space-x-5 w-full xl:my-2 md:ml-[5%] xl:ml-[26%]">
            <button className="flex  ml-[5%]  text-white font-bold uppercase text-xs tracking-[2px]">
              {homeContent.banner.button}
            </button>
            <img className="flex" src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="hidden xl:flex">
          <img className="w-full h-full" src={homeContent.banner.img} />
        </div>
        <div className="flex  flex-row md:hidden">
          <img className="w-full h-full" src={homeContent.banner.imgMobile} />
        </div>
        <div className="hidden md:flex md:w-[40%] lg:hidden">
          <img className="w-full h-full" src={homeContent.banner.imgTab} />
        </div>
      </div>

      {/*Beautiful  stories */}
      <div className="flex flex-col justify-between bg-white md:flex-row xl:h-[560px]">
        <div className="hidden  xl:flex w-[60%]">
          <img className="w-full" src={homeContent.bannerStories.img} />
        </div>
        <div className="hidden  md:flex  lg:hidden">
          <img className="w-full" src={homeContent.bannerStories.imgTab} />
        </div>
        <div className="flex flex-col  md:hidden ">
          <img className="w-full" src={homeContent.bannerStories.imgMobile} />
        </div>

        <div className="flex flex-col   h-[419px]  p-4 items-center w-full md:w-[70%]  lg:w-[40%]">
          <h1 className="text-black text-[32px]  leading-[40px] mt-[10%] md:mt-[22%] uppercase font-bold md:text-[40px] md:leading-[48px] md:w-[60%] md:mr-[25%] mr-[30%] p-2 md:p-0 w-[65%]">
            {homeContent.bannerStories.heading}
          </h1>
          <p className="flex text-[15px] leading-[25px] md:text-base md:w-[85%] w-full md:p-0  md:mt-5 p-4 text-black opacity-60">
            {homeContent.bannerStories.body}
          </p>
          <div className="flex space-x-5 w-full mt-2 md:mt-10 text-xs ml-[10%] md:ml-[15%]">
            <button className="text-black tracking-[2px]  font-bold uppercase">
              {homeContent.bannerStories.button}
            </button>
            <img className="flex" src={blackArrow} alt="arrow" />
          </div>
        </div>
      </div>

      {/* designed for everyone */}
      <div className="flex flex-col-reverse justify-between  bg-white md:flex-row md:items-center w-full  xl:h-full">
        {/* text banner */}
        <div className="flex flex-col  items-center w-full h-[419px]   md:w-[70%]  md:h-[600px]  xl:ml-[5%]  xl:w-[45%]  xl:h-full ">
          <h1 className="text-black text-[40px] mt-[20%] md:mt-[20%] xl:mt-[5%] uppercase font-bold leading-[48px] p-2 w-full md:w-[70%] ml-[15%] md:mr-[30%] ">
            {homeContent.bannerDesign.heading}
          </h1>
          <p className="flex  ml-2 text-[15px] leadding-[25px] p-4 text-black opacity-60 w-[90%] md:w-full md:px-[18%]  md:mr-[18%]">
            {homeContent.bannerDesign.body}
          </p>
          <div className="flex w-full mt-2 md:mt-5 space-x-5">
            <button className="flex  ml-[10%] tracking-[2px] text-xs font-bold text-black uppercase">
              {homeContent.bannerDesign.button}
            </button>
            <img className="flex" src={blackArrow} alt="arrow" />
          </div>
        </div>
        {/* photo banner */}
        <div className="hidden lg:flex flex-row   md:hidden">
          <img className="w-full h-full" src={homeContent.bannerDesign.img} />
        </div>
        <div className="flex flex-col  md:hidden">
          <img className="w-full" src={homeContent.bannerDesign.imgMobile} />
        </div>
        <div className="hidden  md:flex  md:w-[40%] xl:hidden">
          <img
            className="w-full h-full"
            src={homeContent.bannerDesign.imgTab}
          />
        </div>
      </div>
      {/* stories cards */}
      <div className="flex flex-col relative w-full  md:grid md:grid-rows-2 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-1">
        {stories.map((item) => (
          <div className="flex flex-col md:-my-3 h-[375px]  md:h-[500px] relative ">
            <img
              className="hidden w-full h-full hover:-translate-y-5 md:py-3 md:flex"
              src={item.img}
            />
            <img
              className="flex w-full h-full hover:-translate-y-5 md:hidden"
              src={item.imgMobile}
            />

            <h2 className="absolute text-lg mt-[40%] pt-[20%] ml-[10%] md:bottom-[25%] xl:bottom-[25%] md:ml-[10%] font-bold  text-white">
              {" "}
              {item.title}
            </h2>
            <p className="absolute md:bottom-[20%] xl:bottom-[20%] mt-[47%] pt-[20%] ml-[10%] md:ml-[10%] mx-[2%] text-[13px] leading-[17px]  text-white">
              {item.photographer}
            </p>
            <hr className="absolute md:w-[80%] mt-[75%] z-10 md:ml-[10%]  ml-[10%]  w-[80%] xl:bottom-[15%] md:bottom-[15%]  mx-[2%] border-white opacity-25 border " />

            <div className="flex w-full space-x-[40%] mx-[2%]   absolute ml-[10%] md:ml-[10%] mt-[50%] pt-[30%] md:mb-[5%] md:bottom-[5%] xl:bottom-[7%]">
              <button className="flex text-xs text-white uppercase tracking-[2px]">
                {item.button}
              </button>
              <img className="flex" src={arrow} alt="arrow" />
            </div>
          </div>
        ))}
      </div>

      {/* footer banners */}

      <div className="flex flex-col  mb-[25%] md:flex-col md:my-[5%] md:space-y-5 xl:flex-row xl:space-x-5 items-center text-center xl:mx-[10%] md:mb-[15%] xl:mb-10  mx-[5%]">
        {footerBanners.map((item) => {
          return (
            <div className="flex flex-col  xl:my-3  xl:mt-0 md:mt-[10%] md:mb-[10%]">
              <div className="mt-[30%]  xl:mt-[15%] md:mt-2 md:mb-2 mb-[10%] ">
                <img
                  src={item.img}
                  className="mx-auto w-[20%] md:w-[72px] h-[5%] "
                />
              </div>

              <h1 className="mt-[5%] font-bold text-lg mb-[5%] md:mb-3  ">
                {item.title}
              </h1>

              <p className="flex text-[15px]  leading-[25px] w-full px-[5%] md:pb-3  opacity-60 xl:w-full md:w-[80%] xl:mb-10 md:mx-auto xl:mx-auto">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
