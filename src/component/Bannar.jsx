import React from "react";

import { RiSendPlaneFill } from "react-icons/ri";

import BannarImageOne from "../assets/bannar.png";
import BannarTwo from "../assets/bannar1.png";
import Button from "./Button";

const Bannar = () => {
  return (
    <section
      // Important: keep hero background but make spacing/layout mobile-first
      className="!bg-center !bg-cover !bg-no-repeat relative"
      style={{ background: `url(${BannarImageOne})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-12 sm:pt-16 lg:pt-24 pb-10 sm:pb-14 lg:pb-20">
          <h1 className="font-chivo font-bold text-[30px]/[1.15] sm:text-[40px]/[1.15] lg:text-[56px]/[64px] text-tartiary max-w-3xl mx-auto">
            Get your work done with Management Tool
          </h1>
          <p className="font-chivo font-normal text-[14px]/[24px] sm:text-[16px]/[28px] lg:text-[18px]/[32px] text-tartiary max-w-md mx-auto pt-4 sm:pt-6 lg:pt-8 pb-4">
            The world's first project management platform that connects
            everything
          </p>
          {/* Important: input/button stack on mobile, inline on larger screens */}
          <div className="mx-auto max-w-xl">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-stretch sm:bg-tartiary sm:rounded-md sm:overflow-hidden">
            <input
              type="text"
              placeholder="Your Email Address"
              className="px-4 sm:px-6 py-3 sm:py-4 bg-tartiary w-full rounded-md sm:rounded-none text-primary placeholder:text-secondary/70 outline-none"
            />
            <div className="sm:shrink-0 sm:pr-1 sm:py-1">
              <Button
                buttonName={"Try for free"}
                className={"!bg-[#43E7DF] w-full sm:w-auto text-center"}
              />
            </div>
            </div>
          </div>
        </div>
        {/* Important: remove absolute positioning to prevent overflow on small screens */}
        <div className="pb-10 sm:pb-14 lg:pb-20">
          <img
            src={BannarTwo}
            alt="BannarTwo"
            className="w-full max-w-6xl mx-auto h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Bannar;
