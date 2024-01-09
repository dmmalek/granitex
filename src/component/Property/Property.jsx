import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { PiArmchair } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { GiStairs } from "react-icons/gi";
import { CiBookmark } from "react-icons/ci";
import { FaMobileRetro } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import GalleryImage from "./GalleryImage";

const Property = () => {
  return (
    <div>
      <div className="container my-10">
        <GalleryImage />
      </div>
      <div className="mb-20 container">
        <div className="grid place-content-center sm:flex gap-10">
          <div className="grid container place-items-start w-8/12 ">
            <div className="mb-10 text-[#484848]">
              <h1 class="text-2xl text-black-48 lg:mb-1 font-semibold leading-tight">
                Samara Suites Apartment
              </h1>
              <p className="text-sm text-black-48 lg:mb-1 uppercase">SMSB001</p>
            </div>
            <div className="grid grid-cols-3 gap-20 sm:flex sm:gap-10 sm:justify-center sm:items-center sm:mb-20 text-gray-800">
              <div className="grid place-content-center text-center h-8 w-10">
                <span className="text-5xl">
                  <IoBedOutline />
                </span>
                <span> 1BR </span>
              </div>
              <div className="grid place-content-center text-center h-8 w-15">
                <span className="text-5xl">
                  <BiBath />
                </span>
                <span> 1 Bathroom </span>
              </div>
              <div className="grid place-content-center text-center h-8 w-15">
                <span className="text-5xl">
                  <PiArmchair />
                </span>
                <span> Fully Furnished </span>
              </div>
              <div className="grid place-content-center text-center h-8 w-15">
                <span className="text-5xl">
                  <IoBedOutline />
                </span>
                <span>
                  44 m<sup>2</sup>
                </span>
              </div>
              <div className="grid place-content-center text-center h-8 w-15">
                <span className="text-5xl">
                  <GiStairs />
                </span>
                <span>High Floor</span>
              </div>
              <div className="grid place-content-center text-center h-8 w-15">
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
                Apartment Samara Suites Apartment unit SMSB001
              </h2>
              <p className="text-base text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quidem quibusdam, voluptates, asperiores
                quia consequatur voluptatem dolorum quod quos eaque. Quisquam
                voluptatum, quidem quibusdam, voluptates, asperiores quia
                consequatur voluptatem dolorum quod quos eaque.
              </p>
            </div>
          </div>
          <div className="sm:w-4/12">
            <aside>
              <div className="grid place-content-center sm:py-10 border rounded w-full">
                <p className="text-xs text-black-48 mb-4 text-center mt-1 font-medium">
                  Rental Period
                </p>
                <p className=" rounded mb-8 flex-grow text-center font-medium cursor-pointer text-white bg-[#004274]">
                  12<span className="text-sm">mo</span>
                </p>
                <p className="mb-6">Pay Directly for 12 Months</p>
                <p className="text-2xl font-semibold mb-4 text-[#004274]">
                  <sup>Rp</sup>120,000,000
                </p>
                <div className="flex justify-center items-center">
                  <span>
                    <FaMobileRetro />
                  </span>
                  <span>
                    <FaWhatsapp />
                  </span>
                  <p>+880 1511 1234</p>
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
