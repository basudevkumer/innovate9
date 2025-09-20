import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ServicesCard = ({ src, heading, paragraph, imgClassName }) => {
  return (
    <div
      className={`p-[36px] group hover:bg-quaternary transition-all duration-300 ease-in-out rounded-xl  fill-white shadow-xl/10  max-h-[362px] `}
    >
      <div
        className={`p-[22px]  rounded-full  w-fit group-hover:bg-[#fff] transition duration-300 ease-in-out ${imgClassName}`}
      >
        <img
          src={src}
          alt="ServicesCard images"
          className="h-[48px] w-[48px]"
        />
      </div>
      <h6 className="font-chivo font-bold text-[22px]/[34px] text-primary whitespace-nowrap pt-[26px] pb-[8px] group-hover:text-tartiary transition duration-300 ease-in-out">
        {heading}
      </h6>
      <p className="font-dmsans font-normal text-[16px]/[26px] text-primary transition duration-300 ease-in-out group-hover:text-tartiary  ">
        {paragraph}
      </p>
      <a
        href="#"
        className="flex items-center gap-x-[10px] pt-[26px] font-dmsans font-medium text-[16px]/[26px] text-primary transition duration-300 ease-in-out group-hover:text-tartiary  "
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
