import React from "react";
import { IoMdMenu } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

import companyLogo from "../../assets/Final Logo.png"

const Navbar = () => {
  return (
    <header className="z-50 flex items-center justify-between py-4 bg-white md:px-10 sm:w-screen">
      <div>
        <Link to={"/"}>
          <img
            className="object-contain w-40 h-20"
            src={companyLogo}
          />
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <span className="px-4 py-2 transition duration-150 rounded-md hover:ease-in-out hover:underline hover:bg-slate-200">
          Data Services
        </span>
        <span className="px-4 py-2 transition duration-150 rounded-md hover:ease-in-out hover:underline hover:bg-slate-200">
          Quality Analysis
        </span>
        <span className="px-4 py-2 transition duration-150 rounded-md hover:ease-in-out hover:underline hover:bg-slate-200">
          Training
        </span>
        <span className="px-4 py-2 transition duration-150 rounded-md hover:ease-in-out hover:underline hover:bg-slate-200">
          Web Development
        </span>
        <Link to={"/about-us"}>
          <span className="px-4 py-2 transition duration-150 rounded-md hover:ease-in-out hover:underline hover:bg-slate-200">
            About Us
          </span>
        </Link>
        <Link to={"/contact"}>
          <button className="btn2 group">
            Contact Us{" "}
            <MdArrowOutward className="transition-all ease-linear group-hover:rotate-45" />
          </button>
        </Link>
      </div>
      <div className="md:hidden">
        <IoMdMenu className="" size={32} />
      </div>
    </header>
  );
};

export default Navbar;
