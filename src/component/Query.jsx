import React from "react";

import QueryImage from "../assets/query1.png";
import Button from "./Button";

const Query = () => {
  return (
    <section className="pt-14 sm:pt-20 lg:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          // Important: stack on mobile to prevent text overflow
          className="p-6 sm:p-10 lg:p-[100px] !bg-center !bg-no-repeat !bg-cover rounded-[16px] sm:rounded-[20px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
          style={{ background: `url(${QueryImage})` }}
        >
          <h2 className="font-chivo font-normal text-[24px]/[1.25] sm:text-[32px]/[1.25] lg:text-[46px]/[58px] text-tartiary max-w-2xl">
            Don’t find the answer? contact us for any query.
          </h2>
          <div className="w-full lg:w-auto">
            <Button
              buttonName={"Contact Us"}
              className={"text-primary !bg-[#43E7DF] w-full lg:w-auto text-center"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Query;
