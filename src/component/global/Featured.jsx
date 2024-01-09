import React from "react";

const Featured = ({ title }) => {
  return (
    <div className="w-full h-[350px] flex justify-center items-center bg-[url('/assets/bg_4.jpg')] bg-no-repeat bg-cover bg-[#00000099] bg-blend-color ">
      <h1 className="text-6xl mt-8 uppercase text-white">{title}</h1>
    </div>
  );
};

export default Featured;
