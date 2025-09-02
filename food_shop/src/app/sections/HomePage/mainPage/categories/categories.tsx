import MiniCard from "@/app/components/miniCard/miniCard";

import { cates } from "./cates";
import { CLASSNAME } from "./classnames";

export default function Categories() {
  return (
    <div className={CLASSNAME.WRAPPER}>
      <h1 className={CLASSNAME.TITLE}>Order.uk Popular Categories 🤩</h1>
      <div className={CLASSNAME.CONTAINER}>
        {cates.map((e) => {
          return (
            <span className={CLASSNAME.CARD_WRAPPER} key={e.name}>
              <MiniCard
                name={e.name}
                img={e.img}
                rest={e.rest}
                key={e.name}
                type="Category"
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
