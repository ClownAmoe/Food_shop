import Header from "./components/header/header";
import Picture from "./sections/picture/page";
import Restaurant from "./sections/restaurants/page";
import CategoriesSection from "./sections/catrgories/page";
import Popular from "./sections/popular/page";
import Mobile from "./sections/mobile/page";
import PartnersPage from "./sections/partnersPage/page";
import AboutUsPage from "./sections/aboutUsPage/aboutUsPage";

export default function Home() {
  return (
    <div className="w-full pt-4">
      <Header />
      <div className="container mx-auto">
        <Picture />
        <Restaurant />
        <CategoriesSection />
        <Popular />
        <Mobile />
        <PartnersPage />
        <AboutUsPage />
      </div>
    </div>
  );
}
