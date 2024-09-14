import Image from "next/image";
import React from "react";

const Feature = ({ feature, index }) => {
  const isOdd = index % 2 !== 0;
  return (
    <div className={`flex flex-col md:flex-row items-center p-8`}>
      {isOdd ? (
        <>
          <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8 items-center">
            <span className="text-black text-4xl font-bold  leading-[40.50px]">
              {feature.title}
              <br />
            </span>
            <span className="text-[#096a13] text-[54px] font-bold leading-[60.36px]">
              {feature.subtitle}
            </span>
            <div className="md:w-[467px] md:h-[95px] mt-4 text-black text-lg font-medium leading-normal tracking-tight">
              {feature.description}
            </div>
          </div>
          <div className="md:w-1/2 md:flex items-center justify-center hidden">
            <Image
              src={feature.image}
              alt={feature.title}
              width={200}
              height={150}
              className="rounded-lg"
            />
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 md:flex items-center justify-center hidden">
            <Image
              src={feature.image}
              alt={feature.title}
              width={200}
              height={150}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <span className="text-black text-4xl font-bold  leading-[40.50px]">
              {feature.title}
              <br />
            </span>
            <span className="text-[#096a13] text-[54px] font-bold leading-[60.36px]">
              {feature.subtitle}
            </span>
            <div className="md:w-[467px] md:h-[95px] mt-4 text-black text-lg font-medium leading-normal tracking-tight">
              {feature.description}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Feature;
