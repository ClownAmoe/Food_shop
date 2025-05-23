import { arrProp } from "./type";
import RestaurantCard from "../restaurontCard/restaurantCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Restaurants({ arr }: arrProp) {
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
        {arr.map((e) => {
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
