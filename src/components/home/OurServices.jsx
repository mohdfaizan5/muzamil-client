import Eachbox from "@/components/home/EachBox";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaSpellCheck } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";

const data = [
  {
    service: "Training",
    icon: <FaChalkboardTeacher size={38} color="white" />,
    description:
      "Empower your workforce with in-demand skills like Python, web development, SQL, and data science through customized training programs.",
  },
  {
    service: "Web Development",
    icon: <FaLaptopCode size={38} color="white" />,
    description:
      "Build high-performance, engaging web applications that drive conversions and enhance your brand image.",
  },
  {
    service: "QA & Testing",
    icon: <FaSpellCheck size={38} color="white" />,
    description:
      "Ensure the flawless functionality and user experience of your applications with comprehensive frontend and API testing.",
  },
  {
    service: "Data Services",
    icon: <FaDatabase size={38} color="white" />,
    description:
      "Unleash the power of data with a comprehensive suite of services, including data science, AI, machine learning, chatbots, data analytics, and more.",
  },
];

const OurServices = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-semibold md:text-5xl md:py-3">
          Discover Our Expertise
        </h2>
        <h2 className="text-xl leading-tight w-80 md:w-1/3 md:pb-5">
          We believe in partnering with you to achieve your business objectives.
          Contact Dataipulse today and let's unlock the power of technology
          together.{" "}
        </h2>
        {/* <h2 className="text-xl leading-tight w-80 md:w-1/2 md:pb-5">
          We understand and execute your projects; mitigate your risks and
          deliver with certainty{" "}
        </h2> */}
      </section>
      <section className="flex flex-col flex-wrap justify-center sm:py-10 md:flex-row md:gap-5">
        {data.map((each) => (
          <Eachbox key={each.service} data={each} />
        ))}
      </section>
    </div>
  );
};

export default OurServices;
