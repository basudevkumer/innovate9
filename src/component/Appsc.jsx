import React from "react";
import Button from "./Button";

import AppsImageOne from "../assets/app1.png";
import AppsImageTwo from "../assets/app2.png";
import AppsImageThree from "../assets/app3.png";
import AppsImageFour from "../assets/app4.png";
import AppsImageFive from "../assets/app5.png";
import AppsImageSix from "../assets/app6.png";
import AppsImageSeven from "../assets/app7.png";

const Appsc = () => {
  return (
    <section className="py-[105px]">
      <div className="w-[1320px] mx-auto">
        <div className=" grid grid-cols-2 gap-x-[126px]">
          <div>
            <p className="font-dmsans font-medium text-[20px] text-[#FF7364]">
              Integrations
            </p>
            <h2 className="font-chivo font-bold text-[46px]/[58px] text-primary  pt-[5px] pb-[20px]">
              Easily integrate with your favorite apps
            </h2>
            <p className="font-dmsans font-normal text-[18px]/[32px] text-secondary ">
              App integration, in a general sense, is the process of bringing
              resources or capabilities from one application to another. As the
              world of apps continues to evolve, app integration is becoming
              expected in many contexts.
            </p>
            <div className="pt-[40px]">
              <Button buttonName={"Get Started"} className={"!text-[#fff]"} />
            </div>
          </div>
          <div className="grid grid-cols-8 gap-[32px]">
            <div
              className="col-span-4 py-[44px]  bg-tartiary fill-white
             drop-shadow-xl/15   h-fit flex flex justify-center"
            >
              <img src={AppsImageOne} alt="app images" className="h-[50px]" />
            </div>
            <div
              className="col-span-4 py-[44px]  bg-tartiary fill-white
             drop-shadow-xl/15   h-fit flex justify-center"
            >
              <img src={AppsImageTwo} alt="app images" className="h-[50px]" />
            </div>
            <div className=" py-[45px]  bg-tartiary fill-white drop-shadow-xl/15 h-fit col-span-2 flex justify-center">
              <img src={AppsImageThree} alt="app images" className="h-[50px]" />
            </div>
            <div
              className="col-span-4 py-[44px]  bg-tartiary fill-white
             drop-shadow-xl/15   h-fit flex justify-center"
            >
              <img src={AppsImageFour} alt="app images" className="h-[50px]" />
            </div>
            <div className=" py-[45px]  bg-tartiary fill-white drop-shadow-xl/15 h-fit col-span-2 flex justify-center ">
              <img src={AppsImageFive} alt="app images" className="h-[50px]" />
            </div>
            <div
              className="col-span-3 py-[44px]  bg-tartiary fill-white
             drop-shadow-xl/15   h-fit flex justify-center"
            >
              <img src={AppsImageSix} alt="app images" className="h-[50px] w-[170px]" />
            </div>
            <div
              className="col-span-2 py-[44px]   bg-tartiary fill-white
             drop-shadow-xl/15  h-fit flex justify-center"
            >
              <img src={AppsImageFive} alt="app images" className="h-[50px]" />
            </div>
            <div
              className="col-span-3 py-[44px]  bg-tartiary fill-white
             drop-shadow-xl/15   h-fit  flex justify-center"
            >
              <img src={AppsImageSeven} alt="app images" className="h-[50px] w-[170px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appsc;
