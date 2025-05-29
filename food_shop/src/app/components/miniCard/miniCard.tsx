import { CLASSNAME } from "./classname";
import { miniProp } from "./type";
import Image from "next/image";
export default function MiniCard({ name, img, rest, type }: miniProp) {
  let style1 = "";
  let style2 = "";
  let style3 = "";
  if (type === "Category") {
    style1 = CLASSNAME.CATEGORY_BOT;
    style2 = CLASSNAME.CATEGORY_DECS;
    style3 = CLASSNAME.CATEGORY_NAME;
  } else if (type === "Restaurant") {
    style1 = CLASSNAME.RESTAURANT_BOT;
    style2 = CLASSNAME.RESTAURANT_DECS;
    style3 = CLASSNAME.RESTAURANT_NAME;
  }
  return (
    <div className="hover:ring-[#FC8A06] hover:ring-2 transition-all z-10 rounded-xl hover:scale-105 -ring-offset-[4px] ring-gray-300 ring-2">
      <div className="w-full md:w-60 rounded-xl hover:cursor-pointer">
        <div className="">
          <Image
            width={239}
            height={203}
            alt={name}
            src={img}
            className="rounded-t-xl w-full"
          />
        </div>
        <div className={style1}>
          <h1 className={style3}>{name}</h1>
          <p className={style2}>{rest} Restaurants</p>
        </div>
      </div>
    </div>
  );
}
