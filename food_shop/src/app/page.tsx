import Header from "./components/header/header";
import Picture from "./sections/mainPage/picture/page";
import Restaurant from "./sections/mainPage/restaurants/page";
import CategoriesSection from "./sections/mainPage/catrgories/page";
import Popular from "./sections/mainPage/popular/page";
import Mobile from "./sections/secondaryPage/mobile/page";
import PartnersPage from "./sections/secondaryPage/partnersPage/page";
import AboutUsPage from "./sections/secondaryPage/aboutUsPage/aboutUsPage";
import Stats from "./components/stats/stats";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="w-full pt-4 relative">
      <Header />
      <div className="ml-2">
        <Picture />
        <Restaurant />
        <CategoriesSection />
        <Popular />
        <Mobile />
        <PartnersPage />
        <AboutUsPage />
        <Stats />
      </div>
      <Footer />
    </div>
  );
}
