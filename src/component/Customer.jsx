import React from "react";

import CoustomerBannarImageOne from "../assets/customer1.png";
import CoustomerBannarImageTwo from "../assets/customer2.png";

const Customer = () => {
  return (
    <section className="py-[140px] ">
      <div className="w-[1320px] mx-auto">
        <div
          className="pt-[44px] px-[44px] !bg-no-repeat !bg-cover  !bg-center rounded-[40px] object-cover grid grid-cols-2 gap-x-[45px] items-center"
          style={{ background: `url(${CoustomerBannarImageOne})` }}
        >
          <div className="flex  items-end">
            <img src={CoustomerBannarImageTwo} alt="coustomer bannar image" />
          </div>
          <div className="">
            <h2 className="font-chivo font-bold text-[44px] text-tartiary ">
              Trusted by 35,000+ happy customers.
            </h2>
            <div className="flex gap-x-[40px] pt-[64px] ">
              <div>
                <h2 className="font-chivo font-black text-[44px]/[54px] text-tartiary">
                  720+
                </h2>
                <p className="font-dmsans font-medium text-[18px]/[32px] text-tartiary pt-[12px]">
                  Over 500 business powered with us
                </p>
              </div>
              <div>
                <h2 className="font-chivo font-black text-[44px]/[54px] text-tartiary">
                 4.9
                </h2>
                <p className="font-dmsans font-medium text-[18px]/[32px] text-tartiary pt-[12px]">
                  Rating on google play and app store
                </p>
              </div>
              <div>
                <h2 className="font-chivo font-black text-[44px]/[54px] text-tartiary">
                  200+
                </h2>
                <p className="font-dmsans font-medium text-[18px]/[32px] text-tartiary pt-[12px]">
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
