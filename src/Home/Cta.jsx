import React from "react";

const Cta = () => {
  return (
    <div className="bg-[url('/assets/cta.jpg')] bg-cover bg-no-repeat bg-center   text-white">
      <div className="text-white bg-[#004274d7] ">
        <div className="py-12 flex justify-between items-center w-8/12 my-0 mx-auto">
          <div>
            <h2 className="text-5xl mb-4">
              Find Best Place For <br /> Leaving
            </h2>
            <p className="text-lg">Find Best Place For Leaving</p>
          </div>
          <div>
            <button className="btn">GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
