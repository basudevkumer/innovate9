import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ServicesCard = ({ src, heading, paragraph, imgClassName }) => {
  return (
    <div
      // Important: avoid fixed max-height/nowrap to prevent overflow on mobile
      className={`p-6 sm:p-8 group hover:bg-quaternary transition-all duration-300 ease-in-out rounded-xl fill-white shadow-xl/10 h-full`}
    >
      <div
        className={`p-4 sm:p-[22px] rounded-full w-fit group-hover:bg-[#fff] transition duration-300 ease-in-out ${imgClassName}`}
      >
        <img
          src={src}
          alt="ServicesCard images"
          className="h-10 w-10 sm:h-[48px] sm:w-[48px] object-contain"
        />
      </div>
      <h6 className="font-chivo font-bold text-[18px]/[28px] sm:text-[20px]/[30px] lg:text-[22px]/[34px] text-primary pt-5 pb-2 group-hover:text-tartiary transition duration-300 ease-in-out">
        {heading}
      </h6>
      <p className="font-dmsans font-normal text-[14px]/[24px] sm:text-[16px]/[26px] text-primary transition duration-300 ease-in-out group-hover:text-tartiary">
        {paragraph}
      </p>
      <a
        href="#"
        className="flex items-center gap-x-2 pt-5 font-dmsans font-medium text-[14px]/[24px] sm:text-[16px]/[26px] text-primary transition duration-300 ease-in-out group-hover:text-tartiary"
      >
        Read More{" "}
        <span>
          <FaArrowRightLong className="text-[22px]" />
        </span>
      </a>
    </div>
  );
};

export default ServicesCard;
