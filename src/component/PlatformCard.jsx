import React from "react";

const PlatformCard = ({ src,heading, paragraph }) => {
  return (
    <div className="flex flex-col items-center hover:shadow-xl py-6 sm:py-8 px-4 transition-all duration-300 ease-in-out rounded-xl h-full">
      <img
        src={src}
        alt="platfromImages"
        className="h-[88px] w-[88px] sm:h-[100px] sm:w-[100px] lg:h-[110px] lg:w-[110px] object-contain"
      />
      <h6
        // Important: remove fixed width so titles wrap naturally
        className="font-chivo font-bold text-[18px]/[28px] sm:text-[20px]/[30px] lg:text-[24px]/[36px] text-primary pt-5 pb-2 text-center max-w-sm"
      >
        {heading}
      </h6>
      <p className="font-dmsans font-normal text-[14px]/[24px] sm:text-[16px]/[28px] lg:text-[18px]/[32px] text-secondary text-center max-w-sm">
         {paragraph}
      </p>
    </div>
  );
};

export default PlatformCard;
