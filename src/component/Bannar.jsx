import React from "react";

import { RiSendPlaneFill } from "react-icons/ri";

import BannarImageOne from "../assets/bannar.png";
import BannarTwo from "../assets/bannar1.png";
import Button from "./Button";

const Bannar = () => {
  return (
    <section
      className=" !bg-center !bg-cover !bg-no-repeat relative"
      style={{ background: `url(${BannarImageOne})` }}
    >
      <div className="w-[1320px] mx-auto">
        <div className="text-center pt-[98px] pb-[560px]">
          <h1 className="font-chivo font-bold text-[56px]/[64px] text-tartiary w-[796px] mx-auto ">
            Get your work done with Management Tool
          </h1>
          <p className="font-chivo font-normal text-[18px]/[32px] text-tartiary w-[467px] mx-auto pt-[32px] pb-[20px]">
            The world's first project management platform that connects
            everything
          </p>
          <div className="relative w-fit mx-auto">
            <input
              type="text"
              placeholder="Your Email Address"
              className="px-[24px] py-[20px] bg-tartiary   w-[480px] rounded-md "
            />

            <div className=" absolute right-[5px]  top-[50%] -translate-y-1/2">
              <Button
                buttonName={"Try for free"}
                className={" !bg-[#43E7DF] !py-[9px] !px-[30px]"}
              />
            </div>
          </div>
        </div>
        <div className=" absolute bottom-[-21%]  left-[50%] translate-x-[-50%]"> 
          <img src={BannarTwo} alt="BannarTwo"  className=" max-w-[1200px] w-[1200px] h-[637px]"/>
        </div>
      </div>
    </section>
  );
};

export default Bannar;
