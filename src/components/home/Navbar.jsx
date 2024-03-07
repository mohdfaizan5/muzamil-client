import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { IoMdMenu } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="z-50 flex items-center justify-between py-4 bg-white md:px-10 sm:w-screen">
      <div>
        <Link to={"/"}>
          <img
            className="h-16"
            src="https://www.onlinedigitalcompany.com/Dataipulse/wp-content/uploads/2023/04/Dataipulse-Logo-1-removebg-preview.png"
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
