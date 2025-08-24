import Image from "next/image";

import { CLASSNAME } from "./classname";
import { miniProp } from "./type";

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
    <div className={CLASSNAME.WRAPPER}>
      <div className={CLASSNAME.CONTAINER}>
        <div className="">
          <Image
            width={239}
            height={203}
            alt={name}
            src={img}
            className={CLASSNAME.IMG}
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
