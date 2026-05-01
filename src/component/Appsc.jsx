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
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-16 items-center">
          <div>
            <p className="font-dmsans font-medium text-[14px] sm:text-[16px] lg:text-[20px] text-[#FF7364]">
              Integrations
            </p>
            <h2 className="font-chivo font-bold text-[28px]/[1.2] sm:text-[36px]/[1.2] lg:text-[46px]/[58px] text-primary pt-1 pb-4 sm:pb-5">
              Easily integrate with your favorite apps
            </h2>
            <p className="font-dmsans font-normal text-[14px]/[24px] sm:text-[16px]/[28px] lg:text-[18px]/[32px] text-secondary">
              App integration, in a general sense, is the process of bringing
              resources or capabilities from one application to another. As the
              world of apps continues to evolve, app integration is becoming
              expected in many contexts.
            </p>
            <div className="pt-6 sm:pt-8 lg:pt-10">
              <Button buttonName={"Get Started"} className={"!text-[#fff]"} />
            </div>
          </div>
          {/* Important: responsive logo grid; avoid tight 8-col layout on small screens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div
              className="py-8 sm:py-10 bg-tartiary drop-shadow-xl/15 h-fit flex justify-center rounded-xl"
            >
              <img src={AppsImageOne} alt="app images" className="h-10 sm:h-12 object-contain" />
            </div>
            <div
              className="py-8 sm:py-10 bg-tartiary drop-shadow-xl/15 h-fit flex justify-center rounded-xl"
            >
              <img src={AppsImageTwo} alt="app images" className="h-10 sm:h-12 object-contain" />
            </div>
            <div className="py-8 sm:py-10 bg-tartiary drop-shadow-xl/15 h-fit flex justify-center rounded-xl">
              <img src={AppsImageThree} alt="app images" className="h-10 sm:h-12 object-contain" />
            </div>
            <div
              className="py-8 sm:py-10 bg-tartiary drop-shadow-xl/15 h-fit flex justify-center rounded-xl"
            >
              <img src={AppsImageFour} alt="app images" className="h-10 sm:h-12 object-contain" />
            </div>
            <div className="py-8 sm:py-10 bg-tartiary drop-shadow-xl/15 h-fit flex justify-center rounded-xl">
              <img src={AppsImageFive} alt="app images" className="h-10 sm:h-12 object-contain" />
            </div>
            <div
              className="py-8 sm:py-10 bg-tartiary drop-shadow-xl/15 h-fit flex justify-center rounded-xl"
            >
              <img src={AppsImageSix} alt="app images" className="h-10 sm:h-12 w-auto max-w-[170px] object-contain" />
            </div>
            <div
              className="py-8 sm:py-10 bg-tartiary drop-shadow-xl/15 h-fit flex justify-center rounded-xl"
            >
              <img src={AppsImageFive} alt="app images" className="h-10 sm:h-12 object-contain" />
            </div>
            <div
              className="py-8 sm:py-10 bg-tartiary drop-shadow-xl/15 h-fit flex justify-center rounded-xl"
            >
              <img src={AppsImageSeven} alt="app images" className="h-10 sm:h-12 w-auto max-w-[170px] object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appsc;
