import FooterLogo from "../assets/navlogo2.png";

import { FaGoogle } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#F7F7FC]">
      <div className="max-w-[1316px] mx-auto pt-[140px] pb-[57px]    md:grid grid-cols-7 gap-[55px] ">
        <div className="col-span-2">
          <img src={FooterLogo} alt="" className="w-[110px] " />
          <p className=" font-normal font-dmsans text-primary pt-[44px] w-[250px]">
            Build a modern and creative website with Innovate.
          </p>
          <div className="flex gap-x-[10px] pt-[18px]">
            <div className=" w-[45px] h-[45px]  flex justify-center items-center   rounded-full bg-[#EEEEEE] cursor-pointer">
              <FaGoogle className="text-[20px] text-secondary" />
            </div>
            <div className=" w-[45px] h-[45px]  flex justify-center items-center   rounded-full bg-[#EEEEEE] cursor-pointer">
              <IoLogoTwitter className="text-[20px] text-secondary" />
            </div>
            <div className=" w-[45px] h-[45px]  flex justify-center items-center   rounded-full bg-[#EEEEEE] cursor-pointer">
              <FaInstagram className="text-[20px] text-secondary" />
            </div>
            <div className=" w-[45px] h-[45px]  flex justify-center items-center   rounded-full bg-[#EEEEEE] cursor-pointer ">
              <IoLogoLinkedin className="text-[20px] text-secondary" />
            </div>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-y-[15px]">
            <li className="mb-[15px]">
              <a
                href="#"
                className="text-[18px] text-primary font-semibold leading-[120%] font-dmsans "
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[16px] text-secondary font-semibold leading-[120%] font-dmsans "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[16px] text-secondary font-semibold leading-[120%] font-dmsans "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[16px] text-secondary font-semibold leading-[120%] font-dmsans "
              >
                Benifit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[16px] text-secondary font-semibold leading-[120%] font-dmsans "
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[16px] text-secondary font-semibold leading-[120%] font-dmsans "
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col items-start gap-y-[15px]">
            <li className="mb-[15px]">
              <a
                href="#"
                className="text-[18px] text-primary font-semibold leading-[120%] font-dmsans "
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[16px] text-secondary font-semibold leading-[120%] font-dmsans "
              >
                Task Management
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[16px] text-secondary font-semibold leading-[120%] font-dmsans "
              >
                Company growth
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[16px] text-secondary font-semibold leading-[120%] font-dmsans "
              >
                Time tracking
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col items-start gap-y-[15px]">
            <li className="mb-[15px]">
              <a
                href="#"
                className="text-[18px] text-primary font-semibold leading-[120%] font-dmsans  "
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[16px] text-secondary font-semibold leading-[120%] font-dmsans "
              >
                Customer service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[16px] text-secondary font-semibold leading-[120%] font-dmsans "
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[16px] text-secondary font-semibold leading-[120%] font-dmsans "
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="text-[18px] text-primary font-semibold leading-[120%] font-dmsans">
            Get Latest Updates
          </p>
          <p className="text-[16px] text-secondary  font-semibold leading-[26px] font-dmsans pt-[18px] pb-[32px]">
            Subscribe to our newsletter and get many interesting things every
            week
          </p>
          <div>
            <div className="relative ">
              <input
                type="text"
                placeholder="Your Email Address"
                className="px-[18px] py-[15px] border border-[#D2D2D2] w-full rounded-md "
              />

              <a
                href="#"
                className=" p-[12px]  rounded-lg bg-quaternary absolute  top-[50%] -translate-y-1/2 right-[5px]"
              >
                {" "}
                <RiSendPlaneFill className="text-[22px] text-tartiary   " />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[80px] pb-[57px] max-w-[1316px] mx-auto flex justify-between items-center">
        <p className="font-dmsans text-[18px] leading-[180%] font-normal text-secondary">
          @20201 Innovate.All rights reserved.
        </p>
        <div className="flex gap-x-7">
          <p className="font-dmsans text-[18px] leading-[180%] font-normal text-secondary">
            Privacy policy
          </p>
          <p className="font-dmsans text-[18px] leading-[180%] font-normal text-secondary">
            Terms & condition
          </p>
        </div>
      </div>
  
    </footer>
  );
};

export default Footer;
