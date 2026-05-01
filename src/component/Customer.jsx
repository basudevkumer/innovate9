import React from "react";

import CoustomerBannarImageOne from "../assets/customer1.png";
import CoustomerBannarImageTwo from "../assets/customer2.png";

const Customer = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          // Important: stack on mobile and keep background cover without overflow
          className="pt-8 sm:pt-10 lg:pt-11 px-5 sm:px-8 lg:px-11 !bg-no-repeat !bg-cover !bg-center rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-12 items-center"
          style={{ background: `url(${CoustomerBannarImageOne})` }}
        >
          <div className="flex items-end justify-center lg:justify-start order-2 lg:order-1">
            <img
              src={CoustomerBannarImageTwo}
              alt="coustomer bannar image"
              className="w-full max-w-md lg:max-w-none h-auto object-cover"
            />
          </div>
          <div className="">
            <h2 className="font-chivo font-bold text-[26px]/[1.2] sm:text-[34px]/[1.2] lg:text-[44px]/[1.2] text-tartiary">
              Trusted by 35,000+ happy customers.
            </h2>
            {/* Important: use grid so stats wrap nicely on small screens */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-10 lg:pt-16">
              <div>
                <h2 className="font-chivo font-black text-[28px]/[1.1] sm:text-[34px]/[1.1] lg:text-[44px]/[54px] text-tartiary">
                  720+
                </h2>
                <p className="font-dmsans font-medium text-[14px]/[24px] sm:text-[16px]/[28px] lg:text-[18px]/[32px] text-tartiary pt-2 sm:pt-3">
                  Over 500 business powered with us
                </p>
              </div>
              <div>
                <h2 className="font-chivo font-black text-[28px]/[1.1] sm:text-[34px]/[1.1] lg:text-[44px]/[54px] text-tartiary">
                 4.9
                </h2>
                <p className="font-dmsans font-medium text-[14px]/[24px] sm:text-[16px]/[28px] lg:text-[18px]/[32px] text-tartiary pt-2 sm:pt-3">
                  Rating on google play and app store
                </p>
              </div>
              <div>
                <h2 className="font-chivo font-black text-[28px]/[1.1] sm:text-[34px]/[1.1] lg:text-[44px]/[54px] text-tartiary">
                  200+
                </h2>
                <p className="font-dmsans font-medium text-[14px]/[24px] sm:text-[16px]/[28px] lg:text-[18px]/[32px] text-tartiary pt-2 sm:pt-3">
                  Easily integrate with your favorite apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
