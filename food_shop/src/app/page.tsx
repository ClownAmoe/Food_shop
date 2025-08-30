import Header from "./components/header/header";
import Picture from "./sections/HomePage/mainPage/picture/page";
import Restaurant from "./sections/HomePage/mainPage/restaurants/page";
import CategoriesSection from "./sections/HomePage/mainPage/catrgories/page";
import Popular from "./sections/HomePage/mainPage/popular/page";
import Mobile from "./sections/HomePage/secondaryPage/mobile/page";
import PartnersPage from "./sections/HomePage/secondaryPage/partnersPage/page";
import AboutUsPage from "./sections/HomePage/secondaryPage/aboutUsPage/aboutUsPage";
import Stats from "./components/stats/stats";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="w-full  relative">
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
