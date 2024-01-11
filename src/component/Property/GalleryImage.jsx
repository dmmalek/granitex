import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const GalleryImage = ({ gallery }) => {
  return (
    <div className="gallary container mt-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {gallery?.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className=" rounded w-full h-[500px] object-cover"
              src={`http://localhost:1337${item}`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryImage;
