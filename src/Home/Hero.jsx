import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/assets/hero.jpg')] w-full h-screen  flex justify-start items-center">
        <div className="container text-white">
          <span className=" text-lg font-normal mb-1 block">
            3 Bed - 2 Bath - 2200 Sq Ft
          </span>
          <h1 className="font-medium text-6xl mb-3">Light House NY</h1>
          <p className="text-xl font-light mb-5">
            Get started by choosing from one of our pre-built page templates{" "}
            <br /> to showcase your properties
          </p>
          <span className="font-normal text-4xl mb-10 block">$ 3,272</span>
          <button className="btn">View Property</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
