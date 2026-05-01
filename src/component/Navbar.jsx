import NavLogo from "../assets/navlogo.png";
import Button from "./Button";
import { FaChevronDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Important: prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="bg-[#3639A4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5 sm:py-6">
          <div className="flex items-center gap-3">
            <img
              src={NavLogo}
              alt="NavLogo"
              className="w-[96px] sm:w-[110px] h-auto"
            />
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center justify-between flex-1 pl-10">
            <ul className="flex gap-x-8 xl:gap-x-[45px]">
              <li>
                <a
                  href="#"
                  className="flex items-center font-chivo font-semibold text-[16px] xl:text-[18px] text-[#EFF4FA]"
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
                  className="flex items-center font-chivo font-semibold text-[16px] xl:text-[18px] text-[#EFF4FA]"
                >
                  <span className="hover:text-third transition duration-300 ease-in-out">
                    Features
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center font-chivo font-semibold text-[16px] xl:text-[18px] text-[#EFF4FA]"
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
                  className="flex items-center font-chivo font-semibold text-[16px] xl:text-[18px] text-[#EFF4FA]"
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
                  className="flex items-center font-chivo font-semibold text-[16px] xl:text-[18px] text-[#EFF4FA]"
                >
                  <span className="hover:text-third transition duration-300 ease-in-out">
                    Blog
                  </span>
                </a>
              </li>
            </ul>

            <div className="flex items-center">
              <Button buttonName={"Login"} className={"!text-[#fff]"} />
              <Button buttonName={"Register"} className={"!bg-[#43E7DF]"} />
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[#EFF4FA] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <HiXMark className="h-7 w-7" />
            ) : (
              <HiBars3 className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-6">
          <ul className="flex flex-col gap-3 pt-2">
            <li>
              <a
                href="#"
                className="flex items-center justify-between rounded-lg px-3 py-2 font-chivo font-semibold text-[16px] text-[#EFF4FA] hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <span>Home</span>
                <FaChevronDown />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between rounded-lg px-3 py-2 font-chivo font-semibold text-[16px] text-[#EFF4FA] hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <span>Features</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between rounded-lg px-3 py-2 font-chivo font-semibold text-[16px] text-[#EFF4FA] hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <span>Service</span>
                <FaChevronDown />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between rounded-lg px-3 py-2 font-chivo font-semibold text-[16px] text-[#EFF4FA] hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <span>Pages</span>
                <FaChevronDown />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between rounded-lg px-3 py-2 font-chivo font-semibold text-[16px] text-[#EFF4FA] hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <span>Blog</span>
              </a>
            </li>
          </ul>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Button
              buttonName={"Login"}
              className={"!text-[#fff] w-full sm:w-auto text-center"}
            />
            <Button
              buttonName={"Register"}
              className={"!bg-[#43E7DF] w-full sm:w-auto text-center"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
