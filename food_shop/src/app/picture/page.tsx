import Filter from "../components/filter/filter";
import BodyImage from "../components/image/bodyImage";

export default function Body() {
  return (
    <div className="h-full">
      <BodyImage />
      <Filter />
    </div>
  );
}
