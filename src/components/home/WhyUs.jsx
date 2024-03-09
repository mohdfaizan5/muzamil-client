import React from "react";
import progressImg from "../../assets/undraw_futuristic_interface_re_0cm6.svg"
import CloudImg from "../../assets/cloud_hosting.svg"

const WhyUs = () => {
  return (
    <div className="px-4">
      <section className="flex flex-col items-center pb-10 md:flex-row sm:justify-center sm:gap-28 sm:pt-10">
        <section>
          <h2 className="pt-10 pb-5 text-3xl font-medium">Why Dataipulse</h2>
          <ul className="flex flex-col gap-1 pb-5 text-md sm:text-xl ul1">
            <li>Australian Expertise</li>
            <li>Cost-Effective & Innovative</li>
            <li>Your Trusted Partner</li>
            <li>Proven Track Record</li>
            <li>Global Reach</li>

          </ul>
        </section>
        <section>
          <img
            className="w-60 h-60 sm:w-60 sm:h-60 rounded-2xl"
            src={progressImg}
          />
        </section>
      </section>

      <section className="flex flex-col items-center pb-10 md:flex-row-reverse md:justify-center sm:gap-28">
        <section className="sm:w-1/3">
          <h2 className="pt-10 pb-5 text-3xl font-semibold">Our Commitments</h2>
          <p>We take the time to truly grasp your project goals, challenges, and vision. Our skilled team ensures flawless execution, mitigating risks and delivering outcomes you can rely on. We approach every project with integrity and deliver solutions that demonstrably drive successful results.</p>
          <h2 className="pt-10 pb-5 text-xl font-semibold">Our Mission</h2>
          
          <ul className="flex flex-col gap-1 pb-5 text-md ul1">
            <li>To provide exceptional IT solutions that deliver tangible results and a competitive edge.</li>
            <li>To foster long-term partnerships with our clients, becomingtrusted advisors and technology experts.</li>
          </ul>
        </section>
        <section>
          <img
            className="object-contain w-60 h-60 sm:w-80 sm:h-80 rounded-2xl"
            src={CloudImg}
          />
        </section>
      </section>
{/* 
      <section className="flex flex-col items-center pt-10 md:flex-row md:justify-around ">
        <section>
          <h2 className="pt-10 pb-5 text-3xl font-medium">
            Follow our Journey
          </h2>
          <ul className="flex flex-col items-start gap-1 pb-5 text-xl ul1 md:w-1/3">
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
