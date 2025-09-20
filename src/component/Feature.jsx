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
    <section className="pb-[55px]">
      <div className="w-[1320px] mx-auto">
        <div className="grid grid-cols-2 gap-x-[160px]">
          <div className="">
            <img src={FeatureOne} alt="FeatureOne" />
          </div>
          <div>
            <h2 className="pb-[64px]">
              We provide features for your Business
            </h2>
            <div className="grid grid-cols-2 gap-x-[70px] gap-y-[40px]">
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
