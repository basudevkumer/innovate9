import React from "react";
import { HiRocketLaunch } from "react-icons/hi2";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { PiLockKeyFill } from "react-icons/pi";

import FeatureOne from "../assets/feature1.png";
import FeatureCard from "./FeatureCard";
import Button from "./Button";

const Feature = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={FeatureOne}
              alt="FeatureOne"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            {/* Important: ensure consistent typography scaling */}
            <h2 className="font-chivo font-bold text-[28px]/[1.2] sm:text-[36px]/[1.2] lg:text-[46px]/[58px] text-primary pb-8 sm:pb-10 lg:pb-16">
              We provide features for your Business
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 lg:gap-y-10">
              <div className="">
                <FeatureCard
                  icon={<HiRocketLaunch />}
                  heading={"Fast and Easy to use"}
                  paragraph={"Easily to convert API with just a few clicks"}
                  spanClassName={" text-[#FF7364] "}
                  mainClassName={" bg-[#FAEAE8] group-hover:bg-[#FF7364] "}
                />
              </div>
              <div className="">
                <FeatureCard
                  icon={<PiLockKeyFill />}
                  heading={"Fast and Easy to use"}
                  paragraph={"Easily to convert API with just a few clicks"}
                  spanClassName={"!rotate-44 text-[#FFCA4B]"}
                  mainClassName={"bg-[#FAF1E8] group-hover:bg-[#FFCA4B] "}
                />
              </div>
              <div className="">
                <FeatureCard
                  icon={<IoSettingsSharp />}
                  heading={"Fast and Easy to use"}
                  paragraph={"Easily to convert API with just a few clicks"}
                  spanClassName={" text-[#50DFFD] "}
                  mainClassName={" bg-[#50e0fd3e] group-hover:bg-[#50DFFD] "}
                />
              </div>
              <div className="flex items-end">
                <Button
                  buttonName={"Get Started"}
                  className={"!text-tartiary"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
