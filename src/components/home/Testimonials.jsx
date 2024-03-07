import React from "react";
import zedLogo from "../../assets/Zedthebaker_logo-removebg-preview.png"

const Testimonials = () => {
  return (
    <section className="py-5">

      <h2 className="items-center pb-10 text-3xl font-semibold sm:flex sm:flex-col">Our Customers</h2>
      <div className="flex justify-center gap-3 sm:w-screen ">
        <img className="h-20 bg-blend-darken" src={zedLogo}/>
        <img className="h-20 bg-blend-darken" src={zedLogo}/>
        <img className="h-20 bg-blend-darken" src={zedLogo}/>
      </div>
    </section>
  );
};

export default Testimonials;
