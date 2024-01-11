import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1337/api/reviews?populate=*"
        );
        console.log(res);
        setReviews(res.data.data);
      } catch (error) {
        console.error("Error fetching data");
      }
    };
    fetchReviews();
  }, []);

  return (
    <section className="container py-10 grid mt-20">
      <div className="container">
        <div className="grid text-center ">
          <p className="text-[#004274] mb-5 font-semibold">TESTIMONIAL</p>
          <h2 className="text-5xl text-[#000000cc] font-bold mb-10">
            Clients We Help
          </h2>
        </div>

        <div className="grid grid-col-1  place-items-center  sm:grid-cols-3 ">
          {reviews?.slice(0, 3)?.map((item, index) => {
            const { Description, Name, Position, Picture } = item?.attributes;
            const { url } = Picture?.data?.attributes;
            return (
              <div
                key={index}
                className="bg-white p-8 w-11/12 text-[#000000cc] border rounded-md shadow-lg shadow-slate-500/50 my-4"
              >
                <div className="mb-6 bg-[#004274] w-10 h-10 text-2xl flex justify-center items-center rounded-full">
                  <span className="text-white">
                    <FaQuoteLeft />
                  </span>
                </div>
                <p className="mb-8">{Description}</p>

                <div className="flex gap-2 items-center">
                  <div className="">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={`http://localhost:1337${url}`}
                      alt=""
                    />
                  </div>
                  <div className="grid gap-1">
                    <h3 className=" font-semibold text-2xl ">{Name}</h3>
                    <p className="text-[#004274] uppercase text-sm">
                      {Position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
