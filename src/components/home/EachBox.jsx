import React from "react";

const Eachbox = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-around py-10 mb-5 drop-shadow-md shadow-black bg-gradient-to-r from-primary-blue to-blue-500 rounded-2xl w-72 h-80">
      <h2 className="text-2xl font-semibold text-bg-primary">{data.service}</h2>
      <span className="p-3 border rounded-full">{data.icon}</span>
      <p className="leading-tight text-center text-gray-200 text-md text-balance">{data.description}</p>
    </div>
  );
};

export default Eachbox;
