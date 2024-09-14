import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    // Remove the padding-top (pt-24) from here
    <div className="w-full flex items-center  pt-24 lg:pt-px bg-gradient-to-br from-[#f8f9e9] via-[#f8f9e9] to-[#929389]">
      {/* Add full width and remove horizontal padding */}
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Adjust padding and width for better responsiveness */}
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-4 md:px-16">
          <div className="flex w-full flex-row gap-4 md:items-center">
            <h1 className="text-[#096a13] text-[100px] md:text-[140px] font-normal font-['Abyssinica SIL'] leading-tight">
              አስቤዛ
            </h1>
            <div className="mt-4">
              <span className="text-black text-3xl md:text-4xl font-bold  leading-tight">
                Grocery
              </span>
              <br />
              <span className="text-black text-4xl md:text-[60px] font-bold leading-tight">
                Delivery
              </span>
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-medium leading-normal tracking-tight mt-4">
            <span className="bg-gradient-to-r from-[#084403] via-[#0F7706] via-[#0F6C07] via-[#1FB312] to-[#23C915] text-transparent bg-clip-text">
              Shop from the comfort of your home
            </span>
          </div>
          <div className="w-full md:w-[633px] text-black text-base md:text-lg font-medium leading-normal tracking-tight mt-4">
            Discover a wide range of fresh fruits, vegetables, and pantry
            staples delivered straight to you, fast and easy. Say goodbye to
            long lines and crowded stores. Enjoy contactless delivery and
            unbeatable freshness, all at the click of a button.
          </div>
          <div className="w-full md:w-[316px] h-[50px] md:h-[60px] px-8 py-3 bg-[#067017] justify-center items-center inline-flex mt-6 rounded-md">
            <div className="text-center text-white text-xl font-bold leading-normal">
              Order Now !
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 lg:py-6 text-center hidden lg:flex md:items-baseline md:justify-end">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
