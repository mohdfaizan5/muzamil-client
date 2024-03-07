import React from "react";

const WhyUs = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row md:justify-around items-center  pb-10">
        <section>
          <h2 className="text-3xl pt-10 pb-5 font-medium">Why Dataipulse</h2>
          <ul className="ul1 text-xl flex flex-col gap-1 pb-5">
            <li>100% Australian owned Company</li>
            <li>100% Australian owned Company</li>
            <li>100% Australian owned Company</li>
            <li>100% Australian owned Company</li>
            <li>100% Australian owned Company</li>
            <li>100% Australian owned Company</li>
          </ul>
        </section>
        <section>
          <img
            className="h-80 rounded-2xl"
            src="https://Dataipulse.com/wp-content/uploads/2023/09/Why-Dataipulse-5-5-1.png"
          />
        </section>
      </section>

      <section className="flex flex-col md:flex-row-reverse pb-10 md:justify-around items-center">
        <section>
          <h2 className="text-3xl pt-10 pb-5 font-medium">About Us</h2>
          <ul className="ul1 text-xl flex flex-col gap-1 pb-5">
            <li>100% Australian owned Company</li>
            <li>100% Australian owned Company</li>
            <li>100% Australian owned Company</li>
          </ul>
        </section>
        <section>
          <img
            className="h-80 rounded-2xl"
            src="https://Dataipulse.com/wp-content/uploads/2023/09/Why-Dataipulse-5-5-1.png"
          />
        </section>
      </section>
{/* 
      <section className="flex flex-col md:flex-row md:justify-around items-center pt-10 ">
        <section>
          <h2 className="text-3xl pt-10 pb-5 font-medium">
            Follow our Journey
          </h2>
          <ul className="ul1 text-xl flex flex-col items-start md:w-1/3 gap-1 pb-5">
            <p className="py-2">
              Dataipulse Group is a premium Australian software consulting company
              dedicated to deliver top services and solutions in Software
              Development & Integration, Quality Assurance (QA), Data Analytics,
              Cyber Security, Digital Transformation, Project Management and
              Business Analysis.
            </p>
            <li>100% Australian owned Company</li>
            <li>100% Australian owned Company</li>
            <button className="btn1">Read More {">"}</button>
          </ul>
        </section>
        <section>
          <img
            className="h-[600px] object-contain rounded-2xl"
            src="https://Dataipulse.com/wp-content/uploads/2023/09/MicrosoftTeams-image-removebg-preview.png"
          />
        </section>
      </section> */}
    </div>
  );
};

export default WhyUs;
