import React from "react";
import zedLogo from "../../assets/testimonials logo/Zedthebaker_logo-removebg-preview.png"
import AbdulLogo from "../../assets/testimonials logo/Abdul_Farms-removebg-preview.png"
import DDDLogo from "../../assets/testimonials logo/DDD_cricket_club-removebg-preview.png"
import FAMLogo from "../../assets/testimonials logo/FAM_shared_Accommodation-removebg-preview.png"
import NoahLogo from "../../assets/testimonials logo/Minimalist Simple logo.png"
import WyndhamLogo from "../../assets/testimonials logo/Wyndham_falcom-removebg-preview.png"

const Testimonials = () => {
  return (
    <section className="py-5 grayscale">

      <h2 className="items-center pb-10 text-3xl font-semibold text-center sm:flex sm:flex-col">Our Customers</h2>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:items-center sm:justify-center sm:w-screen ">
        <img className="h-20" src={zedLogo}/>
        <img className="h-28" src={AbdulLogo}/>
        <img className="h-20" src={DDDLogo}/>
        <img className="h-20" src={FAMLogo}/>
        <img className="h-20" src={NoahLogo}/>
        <img className="h-20" src={WyndhamLogo}/>
      </div>
    </section>
  );
};

export default Testimonials;
