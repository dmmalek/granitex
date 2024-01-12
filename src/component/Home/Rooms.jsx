import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const Rooms = ({ filter, maxRoom = 6, hideText = false }) => {
  const [initialRooms, setInitialRooms] = useState([]);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1337/api/rooms?populate=*"
        );
        setRooms(res.data.data);
        setInitialRooms(res.data.data);
      } catch (error) {
        console.error("Error fetching data");
      }
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    if (initialRooms && filter) {
      let allRooms = initialRooms;
      if (filter.city) {
        const filteredRooms = allRooms.filter(
          (room) => room.attributes.City == filter.city
        );
        allRooms = filteredRooms;
      }

      if (filter.bedroom) {
        const filteredRooms = allRooms.filter(
          (room) => room.attributes.Bedroom == filter.bedroom
        );
        allRooms = filteredRooms;
      }

      if (filter.bathroom) {
        const filteredRooms = allRooms.filter(
          (room) => room.attributes.Bathroom == filter.bathroom
        );
        allRooms = filteredRooms;
      }

      if (filter.price) {
        const filteredRooms = allRooms.filter(
          (room) =>
            room.attributes.Price >= filter.price.min &&
            room.attributes.Price <= filter.price.max
        );
        allRooms = filteredRooms;
      }

      setRooms(allRooms);
    }
  }, [filter]);
  return (
    <div>
      <section className="container py-10 grid gap-4 mt-20">
        <div>
          {hideText && (
            <div className="grid text-center">
              <p className="text-[#004274] mb-5 font-semibold">
                OUR PROPERTIES
              </p>
              <h2 className="text-5xl text-[#000000cc] font-bold mb-10">
                Featured Properties
              </h2>
            </div>
          )}
          <div className="grid grid-cols-1 gap-10 items-center sm:grid-cols-3 sm:gap-4 container">
            {rooms?.slice(0, maxRoom)?.map((item, index) => {
              const { Title, Area, Bathroom, Bedroom, Price, City, Gallery } =
                item?.attributes;
              const { url } = Gallery?.data[0]?.attributes;

              return (
                <div
                  key={index}
                  className="bg-white  text-[#000000cc] border rounded shadow-lg shadow-slate-500/50"
                >
                  <div className="mb-4">
                    <a
                      href="#"
                      style={{
                        backgroundImage: `url(http://localhost:1337${url})`,
                      }}
                      className={`relative block w-full h-64 bg-cover bg-no-repeat bg-center	text-white`}
                    >
                      <p className="absolute bottom-0 left-6 right-6 mt-0 mb-4">
                        <span className="text-base font-semibold rounded py-1 px-2 bg-[#004274d7]">
                          $ {Price} / mo
                        </span>
                      </p>
                    </a>
                  </div>

                  <div>
                    <div className="p-4">
                      <h3 className="text-black font-semibold text-2xl mb-4">
                        <a href={`http://localhost:3000/property/${item?.id}`}>
                          {Title}
                        </a>
                      </h3>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <span>
                            <FaMapMarkerAlt />
                          </span>
                          <span>{City}</span>
                        </div>
                        <span className="bg-[#004274fd] w-10 h-5  text-sm text-center font-semibold text-white">
                          Rent
                        </span>
                      </div>
                      <div className="flex items-center mb-2 gap-2 font-semibold text-[#00000099]">
                        <div className="flex items-center gap-1 ">
                          <span>
                            <IoBedOutline />
                          </span>
                          <p>{Bedroom} bed</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>
                            <LiaBathSolid />
                          </span>
                          <p>{Bathroom} bath</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>
                            <MdOutlineCheckBoxOutlineBlank />
                          </span>
                          <p>{Area} sqft</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
