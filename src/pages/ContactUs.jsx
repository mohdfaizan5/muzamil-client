import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import React from "react";

const ContactUs = () => {
  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      <Navbar />
      <main className="sm:py-10">
        <h1 className="text-5xl">Contact Us</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
