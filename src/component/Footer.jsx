import FooterLogo from "../assets/navlogo2.png";

import { FaGoogle } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#F7F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-28 pb-10 sm:pb-14">
        {/* Important: convert to responsive grid (no fixed cols on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-10 lg:gap-[55px]">
        <div className="lg:col-span-2">
          <img src={FooterLogo} alt="" className="w-[96px] sm:w-[110px] h-auto" />
          <p className="font-normal font-dmsans text-primary pt-6 sm:pt-10 lg:pt-[44px] max-w-xs">
            Build a modern and creative website with Innovate.
          </p>
          <div className="flex gap-x-[10px] pt-4 sm:pt-[18px]">
            <div className="w-[42px] h-[42px] sm:w-[45px] sm:h-[45px] flex justify-center items-center rounded-full bg-[#EEEEEE] cursor-pointer">
              <FaGoogle className="text-[20px] text-secondary" />
            </div>
            <div className="w-[42px] h-[42px] sm:w-[45px] sm:h-[45px] flex justify-center items-center rounded-full bg-[#EEEEEE] cursor-pointer">
              <IoLogoTwitter className="text-[20px] text-secondary" />
            </div>
            <div className="w-[42px] h-[42px] sm:w-[45px] sm:h-[45px] flex justify-center items-center rounded-full bg-[#EEEEEE] cursor-pointer">
              <FaInstagram className="text-[20px] text-secondary" />
            </div>
            <div className="w-[42px] h-[42px] sm:w-[45px] sm:h-[45px] flex justify-center items-center rounded-full bg-[#EEEEEE] cursor-pointer">
              <IoLogoLinkedin className="text-[20px] text-secondary" />
            </div>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-y-[15px]">
            <li className="mb-[15px]">
              <a
                href="#"
                className="text-[16px] sm:text-[18px] text-primary font-semibold leading-[120%] font-dmsans"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] sm:text-[16px] text-secondary font-semibold leading-[120%] font-dmsans"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] sm:text-[16px] text-secondary font-semibold leading-[120%] font-dmsans"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] sm:text-[16px] text-secondary font-semibold leading-[120%] font-dmsans"
              >
                Benifit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] sm:text-[16px] text-secondary font-semibold leading-[120%] font-dmsans"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] sm:text-[16px] text-secondary font-semibold leading-[120%] font-dmsans"
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
                className="text-[16px] sm:text-[18px] text-primary font-semibold leading-[120%] font-dmsans"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] sm:text-[16px] text-secondary font-semibold leading-[120%] font-dmsans"
              >
                Task Management
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] sm:text-[16px] text-secondary font-semibold leading-[120%] font-dmsans"
              >
                Company growth
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] sm:text-[16px] text-secondary font-semibold leading-[120%] font-dmsans"
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
                className="text-[16px] sm:text-[18px] text-primary font-semibold leading-[120%] font-dmsans"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] sm:text-[16px] text-secondary font-semibold leading-[120%] font-dmsans"
              >
                Customer service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] sm:text-[16px] text-secondary font-semibold leading-[120%] font-dmsans"
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] sm:text-[16px] text-secondary font-semibold leading-[120%] font-dmsans"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="text-[16px] sm:text-[18px] text-primary font-semibold leading-[120%] font-dmsans">
            Get Latest Updates
          </p>
          <p className="text-[14px] sm:text-[16px] text-secondary font-semibold leading-[26px] font-dmsans pt-4 sm:pt-[18px] pb-6 sm:pb-8">
            Subscribe to our newsletter and get many interesting things every
            week
          </p>
          <div>
            <div className="relative ">
              <input
                type="text"
                placeholder="Your Email Address"
                className="px-4 sm:px-[18px] py-3 sm:py-[15px] border border-[#D2D2D2] w-full rounded-md"
              />

              <a
                href="#"
                className="p-3 rounded-lg bg-quaternary absolute top-[50%] -translate-y-1/2 right-[5px]"
              >
                {" "}
                <RiSendPlaneFill className="text-[22px] text-tartiary   " />
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-20 pb-10 sm:pb-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="font-dmsans text-[14px] sm:text-[16px] lg:text-[18px] leading-[180%] font-normal text-secondary">
          @20201 Innovate.All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-x-7">
          <p className="font-dmsans text-[14px] sm:text-[16px] lg:text-[18px] leading-[180%] font-normal text-secondary">
            Privacy policy
          </p>
          <p className="font-dmsans text-[14px] sm:text-[16px] lg:text-[18px] leading-[180%] font-normal text-secondary">
            Terms & condition
          </p>
        </div>
      </div>
  
    </footer>
  );
};

export default Footer;
