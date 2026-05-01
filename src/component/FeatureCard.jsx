import React from "react";

const FeatureCard = ({ icon, heading, paragraph, spanClassName, mainClassName }) => {
  return (
    <div className=" group fill-white ">
      <div
        // Important: keep the design but make it scale slightly for small screens
        className={`transition duration-300 ease-in-out w-[56px] h-[56px] sm:w-[65px] sm:h-[65px] rounded-full relative before:absolute before:content-[''] before:w-[72px] before:h-[72px] sm:before:w-[80px] sm:before:h-[80px] before:bg-[#fff] before:rounded-full before:top-[-58px] sm:before:top-[-65px] before:left-0 -rotate-47 flex justify-center items-center ${mainClassName}`}
      >
        <span
          className={`text-[24px] sm:text-[30px] rotate-25 group-hover:text-[#fff] transition duration-300 ease-in-out ${spanClassName}`}
        >
          {icon}
        </span>
      </div>
      <h6 className="font-chivo font-bold text-[16px]/[24px] sm:text-[18px]/[28px] lg:text-[20px]/[30px] pt-3 pb-1 text-primary">
        {heading}
      </h6>
      <p className="font-dmsans font-normal text-[14px]/[24px] sm:text-[16px]/[28px] lg:text-[18px]/[32px] text-secondary max-w-[22rem]">
        {paragraph}
      </p>
    </div>
  );
};

export default FeatureCard;
