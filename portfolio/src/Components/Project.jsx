import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../constants";
import { RxArrowTopRight } from "react-icons/rx";
export const Project = () => {
  return (
    <div>
      <div className=" flex items-center justify-center flex-col h-[600px] bg-[#0d1137]">
        <h1 className="font-bold text-white text-center items-center justify-center text-5xl py-4">Projects</h1>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1.5,
              spaceBetween: 25,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%] border border-pink-600"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title} className="border border-pink-600">
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-4 h-[250px] w-[215px] lg:h-[400px] lg:w-[330px] overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                  <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                  <p className="lg:text-[18px]">{item.content} </p>
                </div>
                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
