import React from "react";
import { homeContent } from "../Datalist";
import arrow from "../assets/shared/desktop/arrow.svg";

const Home = () => {
  const { stories, footerBanners } = homeContent;
  return (
    <div>
      <div className="flex flex-col-reverse justify-between bg-black md:flex-row md:h-[600px]">
       
        <div className="flex flex-col  items-center my-10  p-4 xl:w-[40%] mt-[10%] md:w-[70%]">
          
          <h1 className="flex text-white w-full text-4xl md:text-[40px]  uppercase font-bold leading-[48px] p-4  md:w-[70%] xl:ml-[20%] xl:w-[75%]  md:mr-[10%]">
            {homeContent.banner.heading}
          </h1>
          <p className="flex md:text-[15px] leading-[25px] w-full p-5 text-[#dfdfdf] opacity-60 md:mr-[10%] md:w-[70%] md:mb-3 xl:w-[80%] xl:ml-[23%]">
            {homeContent.banner.body}
          </p>
          <div className="flex space-x-3 w-full md:ml-[8%] xl:ml-[30%]" >
           <button className="flex  ml-[5%]  text-white font-bold uppercase text-xs">
            {homeContent.banner.button}
            
          </button>
          <img className="flex" src={arrow} alt="arrow" />
          </div>
          
          
        </div>
        
        <div className="hidden xl:flex xl:w-[60%]">
          <img className="w-full h-full" src={homeContent.banner.img} />
        </div>
        <div className="flex  flex-row md:hidden">
          <img className="w-full h-full" src={homeContent.banner.imgMobile} />
        </div>
        <div className="hidden md:flex md:w-[30%] lg:hidden">
          <img className="w-full" src={homeContent.banner.imgTab} />
        </div>
      </div>

      {/* stories */}
      <div className="flex flex-col justify-between bg-white md:flex-row xl:h-[560px]">
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
      <div className="flex flex-col-reverse justify-between  bg-white md:flex-row xl:h-[570px]">
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
      <div className="flex flex-col relative md:flex-row  ">
        {stories.map((item) => (
          <div className="flex flex-col w-full">
            <img className="w-full xl:h-[470px] hover:-translate-y-5 " src={item.img} />
            <h2
              className="absolute text-lg mt-[85%] pt-[20%] ml-[10%] md:bottom-[30%] md:ml-[3%]
              font-bold  text-white uppercase"
            >
              {" "}
              {item.title}
            </h2>
            <p className="absolute md:bottom-[23%]  mt-[90%] pt-[20%]  ml-[10%] md:ml-[3%] mx-[2%] text-sm  text-white">
              {item.photographer}
            </p>
            <hr className="absolute md:w-[20%] mt-[120%]  z-10  ml-[10%] md:ml-[3%] w-[80%] md:bottom-[15%]  mx-[2%] border-white opacity-50 border " />
            
            <div className="flex mx-[2%] space-x-10 absolute ml-[10%] md:ml-[3%] mt-[95%] pt-[30%] md:bottom-[5%] xl:bottom-[7%]  justify-between">
            <button className="flex text-xs   text-white uppercase">
              {item.button}
            </button>
            <img className="flex" src={arrow} alt="arrow" />
            </div>  
            
          </div>
        ))}
      </div>

      {/* footer banners */}

      <div className="flex flex-col mb-[15%] md:flex-col md:space-y-12 xl:flex-row xl:space-x-5 items-center text-center xl:mx-[10%] md:mb-[15%]  mx-[5%]">
        {footerBanners.map((item) => {
          return (
            <div className="flex flex-col space-y-1 xl:my-5  xl:mt-[5%] md:mt-[15%] md:mb-[5%]">
              <div className="mt-[30%] xl:mt-[15%] md:mt-2 md:mb-2 mb-[5%] ">
                <img src={item.img} className="mx-auto w-[10%] h-[5%] " />
              </div>

              <h1 className="mt-[5%] font-bold text-lg mb-[5%] md:pb-2 md:pt-[5%] ">
                {item.title}
              </h1>
              
              <p className="flex text-[15px] leading-[25px]  opacity-60 xl:w-[80%] md:w-[80%] md:mx-auto xl:mx-auto xl:mb-[25%]">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
