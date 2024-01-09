import React from "react";

const About = () => {
  return (
    <div className=" grid sm:grid-cols-[1fr,2fr] gap-10 my-10 container">
      <div className="hidden sm:block sm:bg-[url('/assets/about.jpg')] sm:w-full sm:h-auto "></div>
      <div>
        <div className="grid">
          <h2 className="mb-4 text-[#004274] font-semibold text-sm">
            ABOUT US
          </h2>
          <h3 className="text-5xl mb-4 text-[#000000cc] font-semibold">
            A Real Estate Company
          </h3>
          <p className="mb-4 text-[#000000cc]">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <div className="flex flex-col sm:flex-row gap-y-4 sm:justify-between sm:items-center mb-10 font-semibold">
            <div>
              <span className="text-5xl text-[#000000]">50</span>
              <p className="text-[#004274] text-sm mt-2">
                YEARS OF EXPERIENCED
              </p>
            </div>
            <div>
              <span className="text-5xl text-[#000000]">210K+</span>
              <p className="text-[#004274] text-sm mt-2">TOTAL PROPERTIES</p>
            </div>
            <div>
              <span className="text-5xl text-[#000000]">450</span>
              <p className="text-[#004274] text-sm mt-2">QUALIFIED REALTORS</p>
            </div>
            <div>
              <span className="text-5xl text-[#000000]">100</span>
              <p className="text-[#004274] text-sm mt-2">TOTAL BRANCHES</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/assets/about_2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
