import React from "react";
import ServicesCard from "./ServicesCard";

import ServicesImageOne from "../assets/service1.png";
import ServicesImageTwo from "../assets/service2.png";
import ServicesImageThree from "../assets/service3.png";
import ServicesImageFour from "../assets/service4.png";
import Button from "./Button";

const Service = () => {
  return (
    <section className="">
      <div className="w-[1320px] mx-auto">
        <div className="flex flex-col gap-y-1 items-center pb-[80px] ">
          <p className="font-dmsans font-medium text-[20px]    text-[#FF7364] ">
            Our Services
          </p>
          <h2 className="font-chivo font-bold text-[46px]/[58px] text-primary ">
            How It Works
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-x-[30px]">
          <div>
            <ServicesCard
              src={ServicesImageOne}
              heading={"Plan Product Roadmap"}
              paragraph={
                "A product roadmap is a shared source of truth that outlines the vision, direction, priorities"
              }
               imgClassName={" bg-[#FAEAE8]"}
            />
          </div>
          <div>
            <ServicesCard
              src={ServicesImageThree}
              heading={"Assign Any Work"}
              paragraph={
                "Work assignment or job assignment is allocating work to work centers or appropriate "
              }
               imgClassName={" bg-[#363aa422]"}
            />
          </div>
          <div>
            <ServicesCard
              src={ServicesImageTwo}
              heading={"Monitor Work Progress"}
              paragraph={
                "Monitor Work ProgressKeeping records and monitoring activities helps people see progress "
              }
              imgClassName={" bg-[#E8FAF0]"}
            />
          </div>
          <div>
            <ServicesCard
              src={ServicesImageFour}
              heading={"Pertect Intergration"}
              paragraph={
                "App integration, in a general sense, is the process of resources or capabilities from one application  "
              }
               imgClassName={" bg-[#E8F2FA]"}
            />
          </div>
        </div>
        <div className="pt-[80px] text-center">
          <Button buttonName={"View More"} className={"bg-transparent border border-quaternary"}/>
        </div>
      </div>
    </section>
  );
};

export default Service;
