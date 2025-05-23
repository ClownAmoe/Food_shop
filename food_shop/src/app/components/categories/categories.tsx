import MiniCard from "../miniCard/miniCard";
import { cates } from "./cates";

export default function Categories() {
  return (
    <div className="mt-16 ml-2 mr-2">
      <h1 className="text-3xl">Order.uk Popular Categories 🤩</h1>
      <div className="flex flex-col gap-8 md:gap-3 w-full md:w-min md:flex-row md:justify-between mt-12">
        {cates.map((e) => {
          return (
            <MiniCard
              name={e.name}
              img={e.img}
              rest={e.rest}
              key={e.name}
              type="Category"
            />
          );
        })}
      </div>
    </div>
  );
}
