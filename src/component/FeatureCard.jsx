import React from "react";

const FeatureCard = ({ icon, heading, paragraph, spanClassName, mainClassName }) => {
  return (
    <div className=" group fill-white ">
      <div
        className={`  transition duration-300 ease-in-out w-[65px] h-[65px]   rounded-full relative  before:absolute before:content-[''] before:w-[80px] before:h-[80px] before:bg-[#fff] before:rounded-full before:top-[-65px] before:left-0 -rotate-47 flex justify-center items-center ${mainClassName}`}
      >
        <span
          className={`text-[30px] rotate-25  group-hover:text-[#fff] transition duration-300 ease-in-out ${spanClassName}`}
        >
          {icon}
        </span>
      </div>
      <h6 className=" pt-[14px] pb-[6px]">
        {heading}
      </h6>
      <p className=" font-dmsans font-normal text-[18px]/[32px] text-secondary w-[220px]">
        {paragraph}
      </p>
    </div>
  );
};

export default FeatureCard;
