import Header from "./components/header/header";
import Stats from "./components/stats/stats";
import Footer from "./components/footer/footer";
import BodyImage from "./sections/HomePage/mainPage/bodyImage/bodyImage";
import ChooseRest from "./sections/HomePage/mainPage/chooseRest/chooseRest";
import PopularRest from "./sections/HomePage/mainPage/popularRest/popularRest";
import MobileImg from "./sections/HomePage/secondaryPage/mobileImg/mobileImg";
import Categories from "./sections/HomePage/mainPage/categories/categories";
import Partners from "./sections/HomePage/secondaryPage/partners/partners";
import AboutUs from "./sections/HomePage/secondaryPage/aboutUs/aboutUs";

export default function Home() {
  return (
    <div className="w-full  relative">
      <Header />
      <div className="ml-2">
        <BodyImage />
        <ChooseRest />
        <Categories />
        <div className="flex flex-col justify-center items-center">
          <PopularRest />
          <MobileImg />
          <Partners />
        </div>
        <AboutUs />
        <Stats />
      </div>
      <Footer />
    </div>
  );
}
