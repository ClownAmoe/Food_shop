import { arrProp, objProp } from "./type";
import RestaurantCard from "../restaurontCard/restaurantCard";
export default function Restaurants({ arr }: arrProp) {
  return (
    <div>
      <div className="grid grid-rows-3 grid-cols-3 gap-2 mt-10">
        {arr.map((e) => {
          return (
            <RestaurantCard
              mainText={e.name}
              percent={e.percent}
              role={e.role}
              img={e.image}
              key={e.name}
            />
          );
        })}
      </div>
    </div>
  );
}
