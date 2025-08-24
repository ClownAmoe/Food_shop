import MiniCard from "../miniCard/miniCard";

import { restaurants } from "./popular";

export default function PopularRest() {
  return (
    <div className="mt-16 ml-2 mr-2 ">
      <h1 className="text-3xl">Popular Restaurants</h1>
      <div className="flex flex-col justify-center md:flex-row md:justify-between mt-10 gap-8 md:gap-1">
        {restaurants.map((e) => {
          return (
            <MiniCard
              name={e.name}
              img={e.image}
              type="Restaurant"
              key={e.name}
            />
          );
        })}
      </div>
    </div>
  );
}
