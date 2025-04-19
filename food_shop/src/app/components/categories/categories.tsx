import CategCard from "../categCard/categCard";
import { cates } from "./cates";

export default function Categories() {
  return (
    <div className="mt-16 ml-2 mr-2">
      <h1 className="text-3xl">Order.uk Popular Categories 🤩</h1>
      <div className="flex flex-row justify-between mt-12">
        {cates.map((e) => {
          return (
            <CategCard name={e.name} img={e.img} rest={e.rest} key={e.name} />
          );
        })}
      </div>
    </div>
  );
}
