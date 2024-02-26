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

const Navbar = () => {
  return (
    <header className="md:px-10 py-4 flex justify-between items-center">
      <div>
        <img
          className="h-16"
          src="https://www.onlinedigitalcompany.com/adactin/wp-content/uploads/2023/04/adactin-Logo-1-removebg-preview.png"
        />
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList className="btn1">
            Contact Us
          </NavigationMenuList>

        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
