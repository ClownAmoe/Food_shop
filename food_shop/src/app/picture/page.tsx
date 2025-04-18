import ChooseRest from "../components/chooseRest/chooseRest";
import BodyImage from "../components/image/bodyImage";
import Restaurants from "../components/restaurants/restaurants";
export default function Body() {
  return (
    <div className="h-full">
      <BodyImage />
      <ChooseRest />
    </div>
  );
}
