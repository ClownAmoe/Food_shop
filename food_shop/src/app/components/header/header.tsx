import Image from "next/image";

import Button from "../button/button";

import { CLASSNAME } from "./CLASSNAME";

export default function Header() {
  return (
    <div className="w-full h-16 flex flex-row justify-between p-6 items-end mt-4">
      <div className="flex items-center justify-center w-full md:block md:w-auto">
        <Image src="/header/LOGO.svg" height={50} width={215} alt="Logo" />
      </div>
      <ul className="md:flex flex-row justify-between w-full hidden md:w-[1000px] items-end gap-6">
        <li>
          <a href="#" className={CLASSNAME.HEADER_TEXT}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={CLASSNAME.HEADER_TEXT}>
            Special Offers
          </a>
        </li>
        <li>
          <a href="#" className={CLASSNAME.HEADER_TEXT}>
            Restaurants
          </a>
        </li>
        <li>
          <a href="#" className={CLASSNAME.HEADER_TEXT}>
            Track Order
          </a>
        </li>
        <li className="h-full w-[130px]">
          <Button
            typeOfButton="submit"
            variation="login"
            image="header/Male User.svg"
          >
            Log in
          </Button>
        </li>
      </ul>
    </div>
  );
}
