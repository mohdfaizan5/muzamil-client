import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

import companyLogo from "../../assets/Final Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const popupMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="z-50 flex items-center justify-between w-screen px-5 py-4 bg-white md:px-10 sm:w-screen">
      <div>
        <Link to={"/"}>
          <img className="object-contain w-40 h-20" src={companyLogo} />
        </Link>
      </div>
      <div className="hidden sm:flex sm:items-center sm:gap-1 ">
        <Link to={"/contact"}>
          <span className="px-4 py-2 transition duration-150 rounded-md hover:ease-in-out hover:underline hover:bg-slate-200">
            Data Science{" "}
          </span>
        </Link>
        <Link to={"/contact"}>
          <span className="px-4 py-2 transition duration-150 rounded-md hover:ease-in-out hover:underline hover:bg-slate-200">
            Quality Analysis{" "}
          </span>
        </Link>
        <Link to={"/contact"}>
          <span className="px-4 py-2 transition duration-150 rounded-md hover:ease-in-out hover:underline hover:bg-slate-200">
            Trainings{" "}
          </span>
        </Link>
        <Link to={"/contact"}>
          <span className="px-4 py-2 transition duration-150 rounded-md hover:ease-in-out hover:underline hover:bg-slate-200">
            Web Development{" "}
          </span>
        </Link>
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
      <div className="md:hidden" onClick={() => {}}>
        {!isOpen ? (
          <IoMdMenu
            className="transition duration-200 ease-in"
            size={32}
            onClick={popupMenu}
          />
        ) : (
          <IoCloseOutline
            className="transition duration-300 ease-in"
            size={32}
            onClick={popupMenu}
          />
        )}
        {isOpen && (
          <div
            className={`w-full bg-bg-primary border-b-2 top-24 left-0 h-40 mx-auto flex flex-col absolute items-center }`}
          >
            <Link to={"/about-us"}>
              <span className="flex px-4 py-2 my-4 transition duration-150 rounded-md btn1 hover:ease-in-out hover:underline hover:bg-slate-200">
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
        )}
      </div>
    </header>
  );
};

export default Navbar;
