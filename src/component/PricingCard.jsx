import React from "react";
import { FaCheck } from "react-icons/fa6";
import Button from "./Button";

const PricingCard = ({
  src,
  headingOne,
  headingTwo,
  paragraph,
  persentage,
  text1,
  text2,
  text3,
  text4,
  text5,
  imgClassName
}) => {
  return (
    <div className="py-8 sm:py-10 px-6 sm:px-10 lg:px-[60px] rounded-[20px] bg-tartiary shadow-xl hover:bg-quaternary transition-all duration-300 ease-in-out relative group hover:-translate-y-2 lg:hover:translate-y-[-18px]">
      <div className="flex flex-col items-center   ">
        <div className={`rounded-full p-5 sm:p-6 group-hover:bg-tartiary transition duration-300 ease-in-out ${imgClassName}`}>
          <img
            src={src}
            alt="pricingcard images"
            className="h-10 w-10 sm:h-[45px] sm:w-[45px] object-contain"
          />
        </div>

        <h6 className="font-chivo font-bold text-[18px]/[28px] sm:text-[20px]/[30px] lg:text-[24px]/[36px] text-quaternary pt-8 pb-1 group-hover:text-[#43E7DF] transition duration-300 ease-in-out">
          {headingOne}
        </h6>
        <h2 className="font-chivo font-bold text-[32px]/[1.1] sm:text-[40px]/[1.1] lg:text-[46px]/[56px] text-primary group-hover:text-tartiary transition duration-300 ease-in-out">
          {headingTwo}
        </h2>
        <p className="pt-3 sm:pt-[14px] font-dmsans font-medium text-[14px]/[20px] sm:text-[16px]/[18px] lg:text-[18px]/[18px] text-secondary group-hover:text-tartiary transition duration-300 ease-in-out">
          {paragraph}{" "}
          <span className="group-hover:text-[#43E7DF] transition duration-300 ease-in-out">
            {persentage}
          </span>
        </p>
      </div>
      <div className="py-8 sm:py-10 flex flex-col gap-y-3 sm:gap-y-[15px]">
        <div className="flex items-center gap-x-[22px]">
          <div className="p-[7px]  rounded-full bg-[#F4EBFF]  w-fit group-hover:bg-tartiary transition duration-300 ease-in-out">
            <FaCheck className="text-[18px] text-quaternary" />
          </div>
          <div>
            <p className="font-dmsans font-medium text-[14px]/[20px] sm:text-[16px]/[18px] lg:text-[18px]/[18px] text-secondary group-hover:text-tartiary transition duration-300 ease-in-out">
              {text1}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-[22px]">
          <div className="p-[7px]  rounded-full bg-[#F4EBFF]  w-fit group-hover:bg-tartiary transition duration-300 ease-in-out">
            <FaCheck className="text-[18px] text-quaternary" />
          </div>
          <div>
            <p className="font-dmsans font-medium text-[14px]/[20px] sm:text-[16px]/[18px] lg:text-[18px]/[18px] text-secondary group-hover:text-tartiary transition duration-300 ease-in-out">
              {text2}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-[22px]">
          <div className="p-[7px]  rounded-full bg-[#F4EBFF]  w-fit group-hover:bg-tartiary transition duration-300 ease-in-out">
            <FaCheck className="text-[18px] text-quaternary" />
          </div>
          <div>
            <p className="font-dmsans font-medium text-[14px]/[20px] sm:text-[16px]/[18px] lg:text-[18px]/[18px] text-secondary group-hover:text-tartiary transition duration-300 ease-in-out">
              {text3}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-[22px]">
          <div className="p-[7px]  rounded-full bg-[#F4EBFF]  w-fit group-hover:bg-tartiary transition duration-300 ease-in-out">
            <FaCheck className="text-[18px] text-quaternary" />
          </div>
          <div>
            <p className="font-dmsans font-medium text-[14px]/[20px] sm:text-[16px]/[18px] lg:text-[18px]/[18px] text-secondary group-hover:text-tartiary transition duration-300 ease-in-out">
              {text4}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-[22px]">
          <div className="p-[7px]  rounded-full bg-[#F4EBFF]  w-fit group-hover:bg-tartiary transition duration-300 ease-in-out">
            <FaCheck className="text-[18px] text-quaternary" />
          </div>
          <div>
            <p className="font-dmsans font-medium text-[14px]/[20px] sm:text-[16px]/[18px] lg:text-[18px]/[18px] text-secondary group-hover:text-tartiary transition duration-300 ease-in-out">
              {text5}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Button
          className={
            "text-tartiary !px-0 w-full text-center group-hover:text-primary group-hover:bg-[#43E7DF] transition duration-300 ease-in-out"
          }
          buttonName={"Purchase Now"}
        />
      </div>
    </div>
  );
};

export default PricingCard;
