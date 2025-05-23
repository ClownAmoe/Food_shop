import Header from "./components/header/header";
import Picture from "./sections/picture/page";
import Restaurant from "./sections/restaurants/page";
import CategoriesSection from "./sections/catrgories/page";
import Popular from "./sections/popular/page";
import Mobile from "./sections/mobile/page";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Picture />
      <Restaurant />
      <CategoriesSection />
      <Popular />
      <Mobile />
    </div>
  );
}
