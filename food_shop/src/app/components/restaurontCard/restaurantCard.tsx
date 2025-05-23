import { RestCardProps } from "./type";

export default function RestaurantCard({
  img,
  mainText,
  percent,
  role,
}: RestCardProps) {
  return (
    <div
      className="flex flex-col justify-around w-full md:w-[475px] h-[300px] bg-no-repeat bg-cover bg-center rounded-2xl relative text-white z-10 cursor-pointer transition-all"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray to-transparent z-0 rounded-xl hover:from-gray-500 transition-all duration-300">
        <p className="absolute top-0 right-5 bg-[#03081F] px-8 py-5 rounded-b-xl text-xl z-20">
          -{percent}
        </p>
        <div className="absolute bottom-8 left-8 z-20">
          <p className="text-[#FC8A06]">Restaurant</p>
          <p className="text-2xl">{mainText}</p>
        </div>
      </div>
    </div>
  );
}
