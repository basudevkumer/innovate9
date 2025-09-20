import React from "react";

const PlatformCard = ({ src,heading, paragraph }) => {
  return (
    <div className="flex flex-col items-center hover:shadow-xl py-[30px] px-[10px] transition-all duration-300 ease-in-out">
      <img src={src} alt="platfromImages" className="h-[110px] w-[110px]" />
      <h6
        className="font-chivo font-bold text-[24px]/[36px] text-primary pt-[26px]  
       pb-[12px]  text-center w-[300px] "
      >
        {heading}
      </h6>
      <p className="font-dmsans font-normal text-[18px]/[32px] text-secondary text-center 
       w-[295px]">
         {paragraph}
      </p>
    </div>
  );
};

export default PlatformCard;
