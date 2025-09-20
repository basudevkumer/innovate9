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
    <div className="py-[40px] px-[60px] rounded-[20px] bg-tartiary shadow-xl hover:bg-quaternary transition-all duration-300 ease-in-out  relative group hover:translate-y-[-18px]">
      <div className="flex flex-col items-center   ">
        <div className={`rounded-full p-[26px] group-hover:bg-tartiary transition duration-300 ease-in-out ${imgClassName}`}>
          <img
            src={src}
            alt="pricingcard images"
            className=" h-[45px] w-[45px] "
          />
        </div>

        <h6 className="font-chivo font-bold text-[24px]/[36px] text-quaternary pt-[12px]  pt-[32px] pb-[4px] group-hover:text-[#43E7DF] transition duration-300 ease-in-out ">
          {headingOne}
        </h6>
        <h2 className="font-chivo font-bold text-[46px]/[56px] text-primary group-hover:text-tartiary transition duration-300 ease-in-out">
          {headingTwo}
        </h2>
        <p className="pt-[14px] font-dmsans font-medium text-[18px]/[18px] text-secondary group-hover:text-tartiary transition duration-300 ease-in-out">
          {paragraph}{" "}
          <span className="group-hover:text-[#43E7DF] transition duration-300 ease-in-out">
            {persentage}
          </span>
        </p>
      </div>
      <div className="py-[40px] flex flex-col gap-y-[15px]">
        <div className="flex items-center gap-x-[22px]">
          <div className="p-[7px]  rounded-full bg-[#F4EBFF]  w-fit group-hover:bg-tartiary transition duration-300 ease-in-out">
            <FaCheck className="text-[18px] text-quaternary" />
          </div>
          <div>
            <p className="font-dmsans font-medium text-[18px]/[18px] text-secondary group-hover:text-tartiary transition duration-300 ease-in-out">
              {text1}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-[22px]">
          <div className="p-[7px]  rounded-full bg-[#F4EBFF]  w-fit group-hover:bg-tartiary transition duration-300 ease-in-out">
            <FaCheck className="text-[18px] text-quaternary" />
          </div>
          <div>
            <p className="font-dmsans font-medium text-[18px]/[18px] text-secondary group-hover:text-tartiary transition duration-300 ease-in-out">
              {text2}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-[22px]">
          <div className="p-[7px]  rounded-full bg-[#F4EBFF]  w-fit group-hover:bg-tartiary transition duration-300 ease-in-out">
            <FaCheck className="text-[18px] text-quaternary" />
          </div>
          <div>
            <p className="font-dmsans font-medium text-[18px]/[18px] text-secondary group-hover:text-tartiary transition duration-300 ease-in-out">
              {text3}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-[22px]">
          <div className="p-[7px]  rounded-full bg-[#F4EBFF]  w-fit group-hover:bg-tartiary transition duration-300 ease-in-out">
            <FaCheck className="text-[18px] text-quaternary" />
          </div>
          <div>
            <p className="font-dmsans font-medium text-[18px]/[18px] text-secondary group-hover:text-tartiary transition duration-300 ease-in-out">
              {text4}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-[22px]">
          <div className="p-[7px]  rounded-full bg-[#F4EBFF]  w-fit group-hover:bg-tartiary transition duration-300 ease-in-out">
            <FaCheck className="text-[18px] text-quaternary" />
          </div>
          <div>
            <p className="font-dmsans font-medium text-[18px]/[18px] text-secondary group-hover:text-tartiary transition duration-300 ease-in-out">
              {text5}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Button className={"text-tartiary !px-0 w-full  text-center  group-hover:text-primary  group-hover:bg-[#43E7DF] transition duration-300 ease-in-out"} buttonName={"Purchase Now"} />
      </div>
    </div>
  );
};

export default PricingCard;
