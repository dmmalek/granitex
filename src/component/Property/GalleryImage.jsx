import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const GalleryImage = () => {
  return (
    <div className="gallary ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            className=" rounded"
            src="/assets/SlideImage/bedroom-00.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded"
            src="/assets/SlideImage/bedroom-03.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded"
            src="/assets/SlideImage/spacejoy-scaled.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded"
            src="/assets/SlideImage/dining-01.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GalleryImage;
