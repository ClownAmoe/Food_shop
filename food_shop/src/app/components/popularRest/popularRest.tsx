"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import MiniCard from "../miniCard/miniCard";
import { CLASSNAME } from "./classname";

import { restaurants } from "./popular";

export default function PopularRest() {
  return (
    <div className={CLASSNAME.WRAPPER}>
      <h1 className={CLASSNAME.TITLE}>Popular Restaurants</h1>
      <div className={CLASSNAME.CONTAINER}>
        {restaurants.map((e) => (
          <MiniCard
            name={e.name}
            img={e.image}
            type="Restaurant"
            key={e.name}
          />
        ))}
      </div>
      <div className="w-full md:hidden mt-6">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 3 },
            300: { slidesPerView: 1 },
          }}
        >
          {restaurants.map((e) => {
            return (
              <SwiperSlide key={e.name}>
                <MiniCard name={e.name} img={e.image} type="Restaurant" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
