import React from "react";
import { IoMailUnreadSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-slate-700 md:flex-row justify-evenly text-white py-10 px-5 mx-[-14px]">
      <section className=" flex flex-col md:flex-row md:justify-evenly py-10">
        <section className="md:w-1/3">
          <h3 className="text-3xl font-semibold">About Our Company</h3>
          <p className="py-2">
            Adactin Group is a premium IT company in Australia dedicated to
            world-class Quality Assurance (QA), Software Development, Data
            Analytics, Digital Transformation & Integration, Project Management.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-semibold py-3">Services</h3>
          <div className="flex gap-3">
            <span>{">>"}</span>
            <span>Development & Integration</span>
          </div>
          <div className="flex gap-3">
            <span>{">>"}</span>
            <span>Project Management & BA Services</span>
          </div>
          <div className="flex gap-3">
            <span>{">>"}</span>
            <span>Data Services</span>
          </div>
          <div className="flex gap-3">
            <span>{">>"}</span>
            <span>Tutoring</span>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold py-3">More</h3>
          <div className="flex gap-3 items-center">
            <IoMailUnreadSharp />

            <p>info@adactin.com</p>
          </div>
        </section>
      </section>
      <h6 className="text-center text-sm">
        Copyright © 2024 Adactin Group Pty Ltd . All rights reserved. Privacy
        Policy
      </h6>
    </footer>
  );
};

export default Footer;
