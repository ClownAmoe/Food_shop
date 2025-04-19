import { CatProp } from "./type";
import Image from "next/image";
export default function CategCard({ name, img, rest }: CatProp) {
  return (
    <div className="hover:ring-[#FC8A06] hover:ring-2 transition-all z-10 rounded-xl hover:scale-105 -ring-offset-[4px] ring-gray-300 ring-2">
      <div className="w-60 rounded-xl hover:cursor-pointer">
        <div className="">
          <Image
            width={239}
            height={203}
            alt={name}
            src={img}
            className="rounded-t-xl w-auto"
          />
        </div>
        <div className="bg-[#F5F5F5] w-auto px-2 py-3 shadow-2xs rounded-b-xl">
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-[#FC8A06] text-sm ">{rest} Restaurants</p>
        </div>
      </div>
    </div>
  );
}
