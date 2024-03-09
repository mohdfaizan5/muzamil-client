import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import { MdOutlineWork } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Navbar />
      <main className="flex flex-col items-center gap-3 px-5 pb-10 sm:px-10">
        <h3 className="flex items-center gap-2 text-4xl font-semibold">
          <MdOutlineWork />
          About us
        </h3>{" "}
        <div className="flex flex-col gap-2 mx-auto">
          <section className="flex flex-col items-center py-10">
            <p className="text-sm sm:w-1/2">
              Hey! I'm Muzamil, At Dataipulse, we're driven by a passion
              for technology and empowering businesses to achieve their full
              potential. We're a premium IT consulting company in Australia,
              offering a comprehensive suite of services to support every stage
              of your digital journey.
            </p>
          </section>
          <h2 className="py-5 text-xl font-semibold sm:ml-40">Our Domains</h2>
          <section className="flex flex-col sm:ml-40">
            <div className="ml-3">
              <span className="font-semibold">- Education</span>
              <p className="ml-5 text-sm sm:w-2/3">
                Equip educators and learners with the skills and tools to thrive
                in the digital world.
              </p>
            </div>
            <div className="ml-3">
              <span className="font-semibold">- Retail</span>
              <p className="ml-5 text-sm sm:w-2/3">
                Streamline processes, personalize customer experiences, and
                boost online sales with cutting-edge web development and data
                analytics solutions.
              </p>
            </div>
            <div className="ml-3">
              <span className="font-semibold">- Hospitality</span>
              <p className="ml-5 text-sm sm:w-2/3">
                Create unforgettable guest experiences with innovative web
                applications, data-driven marketing strategies, and seamless
                reservations systems.
              </p>
            </div>
            <div className="ml-3">
              <span className="font-semibold">- Sports & Recreation</span>
              <p className="ml-5 text-sm sm:w-2/3">
                Engage your audience, enhance performance, and optimize
                operations with custom web platforms, data analysis tools, and
                AI-powered insights.
              </p>
            </div>
            <div className="ml-3">
              <span className="font-semibold">- Food Industry</span>
              <p className="ml-5 text-sm sm:w-2/3">
                Cultivate a loyal customer base and optimize resource allocation
                with data-driven marketing, user-friendly online ordering
                platforms, and analytics dashboards.
              </p>
            </div>
            <div className="ml-3">
              <span className="font-semibold">- Farms</span>
              <p className="ml-5 text-sm sm:w-2/3">
                Embrace the future of agriculture with data science for weather
                forecasting, yield prediction, and resource management
                optimization.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
