import Image from "next/image";
import Header from "./components/header/header";
import Body from "./sections/picture/page";
import Picture from "./sections/picture/page";
import Restaurant from "./sections/restaurants/page";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Picture />
      <Restaurant />
    </div>
  );
}
