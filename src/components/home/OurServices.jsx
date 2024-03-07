import Eachbox from "@/components/home/EachBox";
import React from "react";

const OurServices = () => {


  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-semibold md:text-5xl md:py-3">Discover Our Expertise</h2>
        <h2 className="text-xl leading-tight w-80 md:w-1/2 md:pb-5">
          We understand and execute your projects; mitigate your risks and
          deliver with certainty{" "}
        </h2>
      </section>
      <section className="flex flex-col flex-wrap justify-center py-5 md:flex-row md:gap-5">
        <Eachbox/>
        <Eachbox/>
        <Eachbox/>
        <Eachbox/>

      </section>
    </div>
  );
};

export default OurServices;
