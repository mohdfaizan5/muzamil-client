// import Design from "@/components/home/Design";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className="py-10 px-10 gap-4 h-[80vh] flex flex-col items-center justify-center relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
      {/* <Design className="z-0 w-screen h-screen"/> */}

      <section className="z-10 flex flex-col items-start gap-6">
        <h1 className="text-5xl font-bold leading-10 tracking-tight text-start text-slate-900 sm:max-w-3xl lg:text-6xl dark:text-white">
          Reliable IT Partners - we work your way
        </h1>
        <Link to={"/contact"}>
          <button className="btn2 group">
            Get In Touch{" "}
            <MdArrowOutward className="transition-all ease-linear group-hover:rotate-45" />
          </button>
        </Link>
      </section>
      <section></section>
    </main>
  );
};

export default HeroSection;
