import React from "react";
import PlatformCard from "./PlatformCard";

import PlatformOne from "../assets/platform1.png";
import PlatformTwo from "../assets/platform2.png";
import PlatformThree from "../assets/platform3.png";

const Platform = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-10">
          <h2 className="font-chivo font-bold text-[28px]/[1.2] sm:text-[36px]/[1.2] lg:text-[46px]/[58px] text-primary max-w-xl">
            How simple is it to use our platform?
          </h2>
          <p className="font-dmsans font-normal text-[14px]/[24px] sm:text-[16px]/[28px] lg:text-[18px]/[32px] text-secondary max-w-2xl">
            This Innovate Con guide explores the most popular platforms and
            walks you through how to use them to grow your business.
          </p>
        </div>
        <div className="pt-10 sm:pt-14 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          <div className="h-full">
            <PlatformCard
              src={PlatformOne}
              heading={"Login or sign up to be able use our platform "}
              paragraph={
                "This quickstart shows you how to use Identity Platform to sign in a user with an email and password."
              }
            />
          </div>
          <div className="h-full">
            <PlatformCard
              src={PlatformTwo}
              heading={"Connect your website with just a few click"}
              paragraph={
                "Once your website is online, you can configure it, I will show you how to put your website online"
              }
            />
          </div>
          <div className="h-full">
            <PlatformCard
              src={PlatformThree}
              heading={"Take some sales data that you want "}
              paragraph={
                "Sell your data directly: The most straightforward method is to sell your data directly to another"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
