import ToggleButton from "./ToggleButton";
import PricingCard from "./PricingCard";

import PricingIconOne from "../assets/pricing1.png";
import PricingIconTwo from "../assets/pricing2.png";
import PricingIconThree from "../assets/pricing3.png";

const Pricing = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center gap-y-6 sm:gap-y-8">
          <h2 className="font-chivo font-bold text-[28px]/[1.2] sm:text-[36px]/[1.2] lg:text-[46px]/[58px] text-primary max-w-2xl">
            Easily integrate with your favorite apps
          </h2>
          <div className="flex items-center gap-x-4 sm:gap-x-6">
            <span className="cursor-pointer">
              <h6
                className="font-chivo font-bold text-[16px] sm:text-[18px] lg:text-[24px] text-primary hover:text-secondary transition duration-300 ease-in-out"
              >
                Monthly
              </h6>
            </span>
            <span>
              <ToggleButton />
            </span>
            <span className="cursor-pointer">
              <h6
                className="font-chivo font-bold text-[16px] sm:text-[18px] lg:text-[24px] text-primary hover:text-secondary transition duration-300 ease-in-out"
              >
                Yearly
              </h6>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-x-[30px] pt-10 sm:pt-14 lg:pt-16">
          <div>
            <PricingCard
              src={PricingIconOne}
              headingOne={"Personal"}
              headingTwo={"$10/mth"}
              paragraph={"Annual pricing "}
              persentage={"(save 20%)"}
              text1={"Calendar View"}
              text2={"Custom Templates"}
              text3={"list view"}
              text4={"board view"}
              text5={"Assignees & Due Dates"}
              imgClassName={"bg-[#E8F2FA]"}
            />
          </div>
          <div>
            <PricingCard
              src={PricingIconTwo}
              headingOne={"Team"}
              headingTwo={"$25/mth"}
              paragraph={"Annual pricing "}
              persentage={"(save 35%)"}
              text1={"Timeline Review"}
              text2={"Custom  fields"}
              text3={"Custom Templates"}
              text4={"Task dependencies"}
              text5={"Milestones Manage"}
              imgClassName={"bg-[#38a44535]"}
            />
          </div>
          <div>
            <PricingCard
              src={PricingIconThree}
              headingOne={"Enterprise"}
              headingTwo={"$50/mth"}
              paragraph={"Annual pricing "}
              persentage={"(save 40%)"}
              text1={"Data export & deletion"}
              text2={"Block native integrations"}
              text3={"Custom branding"}
              text4={"Lock custom fields"}
              text5={"Priority support"}
              imgClassName={"bg-[#ECE8F9]"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
