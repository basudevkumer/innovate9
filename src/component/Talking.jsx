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
      <div className="w-[1320px] mx-auto">
        <div className="grid grid-cols-2 gap-x-[50px] items-center">
          <div>
            <h2 className="font-chivo font-bold text-[46px]/[58px] text-primary w-[590px]">
              What they are talking about us?
            </h2>
            <p className="font-dmsans font-normal text-[18px]/[32px] text-secondary pt-[20px] pb-[40px] w-[503px]">
              testimonials are evidence of customers talking about your product
              or service in their own words. At their best, they are authentic,
              descriptive.
            </p>
            <Button buttonName={"Get Started"} className={"text-tartiary"} />
            <div className="pt-[80px] flex gap-x-[30px]">
              <div className=" relative  w-[250px]">
                <div className=" absolute z-0 ">
                  <img
                    src={NatureImageOne}
                    alt="Talking images "
                    className="h-[60px] w-[60px] rounded-full bg-center object-cover "
                  />
                </div>
                <div className=" animate-run absolute left-[50px] z-10">
                  <img
                    src={NatureImageTwo}
                    alt="Talking images"
                    className="h-[60px] w-[60px] rounded-full bg-center object-cover "
                  />
                </div>
                <div className=" animate-runTwo absolute left-[100px] z-20">
                  <img
                    src={NatureImageFour}
                    alt="Talking images z-0"
                    className="h-[60px] w-[60px] rounded-full bg-center object-cover "
                  />
                </div>
                <div className=" animate-runThree absolute left-[150px] z-30">
                  <img
                    src={NatureImageThree}
                    alt="Talking images"
                    className="h-[60px] w-[60px] rounded-full bg-center object-cover "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="flex items-center gap-x-[22px]">
                  <h6 className=" font-dmsans font-black text-[24px]/[36px] text-[#52C5B6]">
                    4.5
                  </h6>
                  <div className="flex gap-x-[6px]">
                    <IoIosStar className="text-[24px] text-[#FDB400]" />
                    <IoIosStar className="text-[24px] text-[#FDB400]" />
                    <IoIosStar className="text-[24px] text-[#FDB400]" />
                    <IoIosStar className="text-[24px] text-[#FDB400]" />
                  </div>
                </div>
                <p className="font-dmsans font-normal text-[18px]/[32px] text-secondary">
                  280k Total Review
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img src={TalkingImage} alt="talking bannag img" className="w-full bg-center object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talking;
