// import Design from "@/components/home/Design";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import Img1 from "../../assets/progressive_app_.svg"
import "../../index.css"

const HeroSection = () => {
  const bg_img1 =
  "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQxs-vzERE_mqDNcmE0GecWmUiMueEpWZAg-LY_CKYwkMH-Keoa-slETlG0BgSIRgpKgfXdwnudMVDxc23JtCALmu_Ff5JoDtJWkkiv5Q";
  return (
    <main  className="demo-wrap py-10 px-10 gap-4 h-[80vh] flex flex-col items-center justify-center relative max-w-5xl mx-auto pt-20 sm:mt-[-30px] sm:pt-10 lg:pt-32 sm:flex-row" >
      {/* <Design className="z-0 w-screen h-screen"/> */}

      <section className="z-10 flex flex-col items-start gap-6 demo-content ">
        <span className="absolute w-5 h-5 rotate-45 opacity-50 blur-xl right-7 top-7 bg-primary-blue"></span>
        <span className="absolute z-0 w-20 h-20 opacity-50 top-1/3 blur-3xl bg-primary-blue"></span>
        <h1 className="z-50 text-5xl font-bold leading-10 tracking-tight text-start text-slate-900 sm:max-w-3xl lg:text-6xl dark:text-white">
          Reliable IT Partners - <span className="text-white">Australia</span>
          {/* Reliable IT Partners - we work your way */}
        </h1>
        <Link to={"/contact"}>
          <button className="btn2 group">
            Get In Touch{" "}
            <MdArrowOutward className="transition-all ease-linear group-hover:rotate-45" />
          </button>
        </Link>
      </section>
      <section className="z-10 hidden sm:block sm:w-2/3">
        <img src={Img1}/>
      </section>
    </main>
  );
};

export default HeroSection;
