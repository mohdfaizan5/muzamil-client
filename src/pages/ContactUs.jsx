import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import React from "react";

const ContactUs = () => {
  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      <Navbar />
      <main className="flex flex-col items-center px-3 sm:py-10">
        <h1 className="mt-4 text-4xl">Contact Us</h1>
        <form className="flex flex-col items-center gap-3 py-8 " action="https://docs.google.com/forms/d/e/1FAIpQLSdBmSDnFjvMC4rdSLji4fvJQDVXS86rB4WbO0Xgkgs26heGOg/formResponse">
          <div className="flex flex-col items-center sm:flex-row">
            <input
              className="p-3 mb-2 mr-2 rounded-md outline-none sm:mb-0 focus:outline-1 focus:outline-primary-blue"
              type="text"
              name="entry.637447140"
              placeholder="Name"
            />
            <input
              className="p-3 mr-2 rounded-md outline-none focus:outline-1 focus:outline-primary-blue"
              type="email"
              name="entry.1986192208"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col items-center sm:flex-row">
            <input
              className="p-3 mb-2 mr-2 rounded-md outline-none sm:mb-0 focus:outline-1 focus:outline-primary-blue"
              type="text"
              name="entry.1632253426"
              placeholder="Phone No."
            />
            <input
              className="p-3 mr-2 rounded-md outline-none focus:outline-1 focus:outline-primary-blue"
              type="text"
              name="entry.1388155822"
              placeholder="Subject"
            />
          </div>
          <textarea className="p-3 shadow-sm outline-none focus:outline-1 focus:outline-primary-blue sm:w-96" type="text" name="entry.489825592" placeholder="Message" ></textarea>
          <input type="submit" value={"Submit"} className="btn1 focus:outline-1 focus:outline-primary-blue" />
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
