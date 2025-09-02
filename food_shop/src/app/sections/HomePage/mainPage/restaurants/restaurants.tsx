import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

import RestaurantCard from "@/app/components/restaurontCard/restaurantCard";
import { arrProp } from "@/app/components/restaurantsList/type";

export default function RestaurantsList({ arr }: arrProp) {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          768: { slidesPerView: 3 },
          300: { slidesPerView: 1 },
        }}
      >
        {arr.map((e: any) => {
          return (
            <SwiperSlide key={e.name}>
              <RestaurantCard
                mainText={e.name}
                percent={e.percent}
                role={e.role}
                img={e.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
