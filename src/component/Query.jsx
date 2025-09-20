import React from "react";

import QueryImage from "../assets/query1.png";
import Button from "./Button";

const Query = () => {
  return (
    <section className="pt-[160px]">
      <div className="w-[1320px] mx-auto">
        <div
          className="p-[100px]  !bg-center !bg-no-repeat !bg-cover !object-cover  rounded-[20px]  flex justify-between items-center"
          style={{ background: `url(${QueryImage})` }}
        >
          <h2 className="font-chivo font-normal text-[46px]/[58px] text-tartiary w-[577px]">
            Don’t find the answer? contact us for any query.
          </h2>
          <div>
            <Button
              buttonName={"Contact Us"}
              className={"text-primary !bg-[#43E7DF]"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Query;
