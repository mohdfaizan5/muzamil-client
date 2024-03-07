import React from "react";
import { IoMailUnreadSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#010101] md:flex-row justify-evenly text-white py-10 px-10 mx-[-14px] w-screen overflow-x-hidden">
      <section className="flex flex-col py-10 md:flex-row md:justify-evenly">
        <section className="md:w-1/3">
          <h3 className="text-3xl text-[#FAFAFA] font-semibold">
            About Our Company
          </h3>
          <p className="py-2 text-[#858585]">
            Dataipulse Group is a premium IT company in Australia dedicated to
            world-class Quality Assurance (QA), Software Development, Data
            Analytics, Digital Transformation & Integration, Project Management.
          </p>
        </section>
        <section>
          <h3 className="py-3 pt-5 text-2xl font-semibold">Services</h3>
          <section className="text-[#858585]">
            <div className="flex gap-3">
              <span>{">"}</span>
              <span>Development & Integration</span>
            </div>
            <div className="flex gap-3">
              <span>{">"}</span>
              <span>Project Management & BA Services</span>
            </div>
            <div className="flex gap-3">
              <span>{">"}</span>
              <span>Data Services</span>
            </div>
            <div className="flex gap-3">
              <span>{">"}</span>
              <span>Tutoring</span>
            </div>
          </section>
        </section>

        <section className="pt-5 pb-3">
          <h3 className="py-3 text-2xl font-semibold">More</h3>
          <div className="flex items-center gap-3 text-white-shade1" >
            <IoMailUnreadSharp />

            <p>info@Dataipulse.com</p>
          </div>
        </section>
      </section>
      <h6 className="text-sm text-center text-[#858585]">
        Copyright © 2024 Dataipulse Group Pty Ltd . All rights reserved. Privacy
        Policy
      </h6>
      <h2 className="py-5 text-6xl font-bold text-center uppercase opacity-50 stroke-2 sm:text-7xl stroke-red-800 ">Dataipulse</h2>
    </footer>
  );
};

export default Footer;
