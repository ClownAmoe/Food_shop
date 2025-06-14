import MiniCard from "../miniCard/miniCard";
import { cates } from "./cates";

export default function Categories() {
  return (
    <div className="mt-16 w-full pl-2 pr-2">
      <h1 className="text-3xl">Order.uk Popular Categories 🤩</h1>
      <div className="flex flex-wrap justify-around gap-8 md:gap-3 w-full md:flex-nowrap md:w-min md:flex-row md:justify-between mt-12">
        {cates.map((e) => {
          return (
            <span className="w-[190px] md:w-full" key={e.name}>
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
