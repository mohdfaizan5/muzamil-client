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
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="z-50 flex items-center justify-between py-4 bg-white md:px-10">
      <div>
        <img
          className="h-16"
          src="https://www.onlinedigitalcompany.com/Dataipulse/wp-content/uploads/2023/04/Dataipulse-Logo-1-removebg-preview.png"
        />
      </div>
      <div>
      
        {/* <Link to={"#"}> */}
          Training
        {/* </Link> */}
        <button className="btn1">Contact Us</button>
      </div>
      <div className="md:hidden">
        <IoMdMenu className="" size={32} />
      </div>
    </header>
  );
};

export default Navbar;
