import React from "react";
import Button from "./Button";
import { IoIosStar } from "react-icons/io";

import NatureImageOne from "../assets/nature1.jpg";
import NatureImageTwo from "../assets/nature2.jpg";
import NatureImageThree from "../assets/nature3.jpg";
import NatureImageFour from "../assets/nature4.jpeg";
import TalkingImage from "../assets/talking2.png";

const Talking = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-12 items-center">
          <div>
            <h2 className="font-chivo font-bold text-[28px]/[1.2] sm:text-[36px]/[1.2] lg:text-[46px]/[58px] text-primary max-w-xl">
              What they are talking about us?
            </h2>
            <p className="font-dmsans font-normal text-[14px]/[24px] sm:text-[16px]/[28px] lg:text-[18px]/[32px] text-secondary pt-4 sm:pt-5 pb-6 sm:pb-8 lg:pb-10 max-w-lg">
              testimonials are evidence of customers talking about your product
              or service in their own words. At their best, they are authentic,
              descriptive.
            </p>
            <Button buttonName={"Get Started"} className={"text-tartiary"} />
            <div className="pt-10 sm:pt-14 lg:pt-20 flex flex-col sm:flex-row gap-6 sm:gap-x-8">
              {/* Important: fixed-width absolute avatars can overflow; constrain and scale */}
              <div className="relative w-[220px] sm:w-[250px] h-[60px]">
                <div className=" absolute z-0 ">
                  <img
                    src={NatureImageOne}
                    alt="Talking images "
                    className="h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] rounded-full bg-center object-cover"
                  />
                </div>
                <div className=" animate-run absolute left-[50px] z-10">
                  <img
                    src={NatureImageTwo}
                    alt="Talking images"
                    className="h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] rounded-full bg-center object-cover"
                  />
                </div>
                <div className=" animate-runTwo absolute left-[100px] z-20">
                  <img
                    src={NatureImageFour}
                    alt="Talking images z-0"
                    className="h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] rounded-full bg-center object-cover"
                  />
                </div>
                <div className=" animate-runThree absolute left-[150px] z-30">
                  <img
                    src={NatureImageThree}
                    alt="Talking images"
                    className="h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] rounded-full bg-center object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="flex items-center gap-x-[22px]">
                  <h6 className="font-dmsans font-black text-[18px]/[28px] sm:text-[22px]/[34px] lg:text-[24px]/[36px] text-[#52C5B6]">
                    4.5
                  </h6>
                  <div className="flex gap-x-[6px]">
                    <IoIosStar className="text-[18px] sm:text-[22px] lg:text-[24px] text-[#FDB400]" />
                    <IoIosStar className="text-[18px] sm:text-[22px] lg:text-[24px] text-[#FDB400]" />
                    <IoIosStar className="text-[18px] sm:text-[22px] lg:text-[24px] text-[#FDB400]" />
                    <IoIosStar className="text-[18px] sm:text-[22px] lg:text-[24px] text-[#FDB400]" />
                  </div>
                </div>
                <p className="font-dmsans font-normal text-[14px]/[24px] sm:text-[16px]/[28px] lg:text-[18px]/[32px] text-secondary">
                  280k Total Review
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={TalkingImage}
              alt="talking bannag img"
              className="w-full h-auto bg-center object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talking;
