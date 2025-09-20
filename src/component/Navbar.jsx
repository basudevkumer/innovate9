import NavLogo from "../assets/navlogo.png";
import Button from "./Button";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="py-[30px]  bg-[#3639A4] ">
      <div className="max-w-[1320px] mx-auto flex items-center">
        <div className="w-[25%] ">
          <img src={NavLogo} alt="NavLogo" className="w-[110px]" />
        </div>
        <div className="w-[75%]  flex justify-between items-center ">
          <div>
            <ul className="flex gap-x-[45px]">
              <li>
                <a
                  href="#"
                  className=" flex items-center font-chivo font-semibold text-[18px] text-[#EFF4FA]  "
                >
                  <span className="hover:text-third transition duration-300 ease-in-out">
                    Home
                  </span>
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center font-chivo font-semibold text-[18px] text-[#EFF4FA]  "
                >
                  <span className="hover:text-third transition duration-300 ease-in-out">
                    Features
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center font-chivo font-semibold text-[18px] text-[#EFF4FA]  "
                >
                  <span className="hover:text-third transition duration-300 ease-in-out">
                    Service
                  </span>
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center font-chivo font-semibold text-[18px] text-[#EFF4FA]  "
                >
                  <span className="hover:text-third transition duration-300 ease-in-out">
                    Pages
                  </span>
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className=" flex items-center font-chivo font-semibold text-[18px] text-[#EFF4FA]  "
                >
                  <span className="hover:text-third transition duration-300 ease-in-out">
                    Blog
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center ">
            <Button buttonName={"Login"} className={" !text-[#fff]"} />
            <Button buttonName={"Register"} className={"!bg-[#43E7DF]"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
