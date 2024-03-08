import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import React from "react";

const ContactUs = () => {
  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      <Navbar />
      <main className="sm:py-10">
        <h1 className="text-5xl">Contact Us</h1>
        <form className="flex flex-col gap-5 py-8" action="https://docs.google.com/forms/d/e/1FAIpQLSdBmSDnFjvMC4rdSLji4fvJQDVXS86rB4WbO0Xgkgs26heGOg/formResponse">
          <div>
            <input
              className="p-3 mr-2 outline-none focus:outline-1 focus:outline-primary-blue"
              type="text"
              name="entry.637447140"
              placeholder="Name"
            />
            <input
              className="p-3 mr-2 outline-none focus:outline-1 focus:outline-primary-blue"
              type="email"
              name="entry.1986192208"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="p-3 mr-2 outline-none focus:outline-1 focus:outline-primary-blue"
              type="text"
              name="entry.1632253426"
              placeholder="Phone No."
            />
            <input
              className="p-3 mr-2 outline-none focus:outline-1 focus:outline-primary-blue"
              type="text"
              name="entry.1388155822"
              placeholder="Subject"
            />
          </div>
          <textarea className="p-3 outline-none focus:outline-1 focus:outline-primary-blue" type="text" name="entry.489825592" placeholder="Message" ></textarea>
          <input type="submit" value={"Submit"} className="btn1 focus:outline-1 focus:outline-primary-blue" />
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
