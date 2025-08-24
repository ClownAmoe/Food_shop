import MiniCard from "../miniCard/miniCard";
import { CLASSNAME } from "./classname";

import { restaurants } from "./popular";

export default function PopularRest() {
  return (
    <div className={CLASSNAME.WRAPPER}>
      <h1 className={CLASSNAME.TITLE}>Popular Restaurants</h1>
      <div className={CLASSNAME.CONTAINER}>
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
