import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  return (
    <section className="container py-10 grid mt-20">
      <div>
        <div className="grid text-center ">
          <p className="text-[#004274] mb-5 font-semibold">TESTIMONIAL</p>
          <h2 className="text-5xl text-[#000000cc] font-bold mb-10">
            Clients We Help
          </h2>
        </div>

        <div className="grid grid-cols-3 ">
          <div className="bg-white p-8 w-11/12 text-[#000000cc] border rounded shadow-lg shadow-slate-500/50 my-4">
            <div className="mb-6 bg-[#004274] w-10 h-10 text-2xl flex justify-center items-center rounded-full">
              <span>
                <FaQuoteLeft />
              </span>
            </div>
            <p className="mb-8">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className="flex gap-2 items-center">
              <div className="">
                <img
                  className="w-20 h-20 rounded-full"
                  src="/assets/person_1.jpg"
                  alt=""
                />
              </div>
              <div className="grid gap-1">
                <h3 className=" font-semibold text-2xl ">John Doe</h3>
                <p className="text-[#004274] uppercase text-sm">
                  Marketing Manager
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 w-11/12 text-[#000000cc] border rounded shadow-lg shadow-slate-500/50 my-4">
            <div className="mb-6 bg-[#004274] w-10 h-10 text-2xl flex justify-center items-center rounded-full">
              <span>
                <FaQuoteLeft />
              </span>
            </div>
            <p className="mb-8">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className="flex gap-2 items-center">
              <div className="">
                <img
                  className="w-20 h-20 rounded-full"
                  src="/assets/person_1.jpg"
                  alt=""
                />
              </div>
              <div className="grid gap-1">
                <h3 className=" font-semibold text-2xl ">John Doe</h3>
                <p className="text-[#004274] uppercase text-sm">
                  Marketing Manager
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 w-11/12 text-[#000000cc] border rounded shadow-lg shadow-slate-500/50 my-4">
            <div className="mb-6 bg-[#004274] w-10 h-10 text-2xl flex justify-center items-center rounded-full">
              <span>
                <FaQuoteLeft />
              </span>
            </div>
            <p className="mb-8">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className="flex gap-2 items-center">
              <div className="">
                <img
                  className="w-20 h-20 rounded-full"
                  src="/assets/person_1.jpg"
                  alt=""
                />
              </div>
              <div className="grid gap-1">
                <h3 className=" font-semibold text-2xl ">John Doe</h3>
                <p className="text-[#004274] uppercase text-sm">
                  Marketing Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
