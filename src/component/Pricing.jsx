import ToggleButton from "./ToggleButton";
import PricingCard from "./PricingCard";

import PricingIconOne from "../assets/pricing1.png";
import PricingIconTwo from "../assets/pricing2.png";
import PricingIconThree from "../assets/pricing3.png";

const Pricing = () => {
  return (
    <section className="py-[100px]">
      <div className="w-[1320px] mx-auto">
        <div className="text-center flex flex-col items-center gap-y-[38px]">
          <h2 className="font-chivo font-bold text-[46px]/[58px] text-primary w-[624px]">
            Easily integrate with your favorite apps
          </h2>
          <div className="flex items-center gap-x-[24px]">
            <span className="cursor-pointer">
              <h6
                className="font-chivo font-bold text-[24px] text-primary 
              hover:text-secondary transition duration-300 ease-in-out "
              >
                Monthly
              </h6>
            </span>
            <span>
              <ToggleButton />
            </span>
            <span className="cursor-pointer">
              <h6
                className="font-chivo font-bold text-[24px] text-primary 
              hover:text-secondary transition duration-300 ease-in-out "
              >
                Yearly
              </h6>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-[30px] pt-[70px]">
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
