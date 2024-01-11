import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { PiArmchair } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { GiStairs } from "react-icons/gi";
import { CiBookmark } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { useEffect, useState } from "react";

const Property = ({ data }) => {
  const {
    Area,
    Bathroom,
    Bedroom,
    City,
    Code,
    Contact,
    Description,
    Furnished,
    Price,
    RentalPeriod,
    Title,
  } = data?.attributes || {};
  return (
    <div>
      <div className="mb-20 container mt-10">
        <div className="grid place-content-center place-items-center md:flex md:items-center gap-10">
          <div className="grid container place-items-start w-8/12 ">
            <div className="mb-10 text-[#484848]">
              <div className="grid gap-1 mb-1n sm:flex sm:justify-between sm:items-center sm:gap-5">
                <h1 className="text-2xl text-black-48 lg:mb-1 font-semibold leading-tight">
                  {Title}
                </h1>
                <span className="flex items-center gap-1">
                  <FaMapMarked />
                  {City}
                </span>
              </div>

              <p className="text-sm text-black-48 lg:mb-1 uppercase">{Code}</p>
            </div>
            <div className="grid grid-cols-3 gap-6 sm:flex sm:gap-10 sm:justify-center sm:items-center sm:mb-5 text-gray-800">
              <div className="flex flex-col items-center justify-center">
                <span className="text-5xl">
                  <IoBedOutline />
                </span>
                <span> {Bedroom}BR </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-5xl">
                  <BiBath />
                </span>
                <span> {Bathroom} Bathroom </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-5xl">
                  <PiArmchair />
                </span>
                <span> {Furnished} </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-5xl">
                  <IoBedOutline />
                </span>
                <span>{Area} sqft</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-5xl">
                  <GiStairs />
                </span>
                <span>High Floor</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-5xl">
                  <FaRegBuilding />
                </span>
                <span>1A Tower</span>
              </div>
            </div>
            <div>
              <div className="my-10">
                <div className="flex items-center m-1 text-[#004274] font-semibold">
                  <span className="text-lg">
                    <CiBookmark />
                  </span>
                  <h1 className="text-lg">Property Description</h1>
                </div>

                <hr />
              </div>
              <h2 className="mb-10">
                {Title} unit {Code}
              </h2>
              <p className="text-base text-justify">{Description}</p>
            </div>
          </div>
          <div className="sm:w-4/12 text-center">
            <aside>
              <div className="grid place-content-center p-4 sm:py-10 border rounded w-full">
                <p className="text-base text-black-48 mb-4 text-center mt-1 font-medium">
                  Rental Period
                </p>
                <p className=" rounded mb-8 flex-grow text-center font-medium cursor-pointer text-white bg-[#004274]">
                  {RentalPeriod}
                  <span className="text-sm"> mo </span>
                </p>
                <p className="mb-6">Pay Directly for 12 Months</p>
                <p className="text-3xl font-semibold mb-4 text-[#004274]">
                  ${Price}
                </p>
                <div className="flex gap-2 justify-center items-center text-2xl">
                  <span className="text-[#28A219]">
                    <FaWhatsapp />
                  </span>
                  <p>{Contact}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
