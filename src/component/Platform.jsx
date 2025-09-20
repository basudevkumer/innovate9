import React from "react";
import PlatformCard from "./PlatformCard";

import PlatformOne from "../assets/platform1.png";
import PlatformTwo from "../assets/platform2.png";
import PlatformThree from "../assets/platform3.png";

const Platform = () => {
  return (
    <section className="pb-[160px] pt-[290px]">
      <div className="w-[1320px] mx-auto">
        <div className="flex justify-between">
          <h2 className="font-chivo font-bold text-[46px]/[58px] text-primary w-[504px]">
            How simple is it to use our platform?
          </h2>
          <p className="font-dmsans font-normal text-[18px]/[32px] text-secondary w-[540px] ">
            This Innovate Con guide explores the most popular platforms and
            walks you through how to use them to grow your business.
          </p>
        </div>
        <div className="pt-[116px] grid grid-cols-3 gap-x-[190px]">
          <div>
            <PlatformCard
              src={PlatformOne}
              heading={"Login or sign up to be able use our platform "}
              paragraph={
                "This quickstart shows you how to use Identity Platform to sign in a user with an email and password."
              }
            />
          </div>
          <div>
            <PlatformCard
              src={PlatformTwo}
              heading={"Connect your website with just a few click"}
              paragraph={
                "Once your website is online, you can configure it, I will show you how to put your website online"
              }
            />
          </div>
          <div>
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
