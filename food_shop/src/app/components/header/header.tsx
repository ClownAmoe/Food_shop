import Image from "next/image";

import Button from "../button/button";

import { CLASSNAME } from "./CLASSNAME";

export default function Header() {
  return (
    <div className={CLASSNAME.WRAPPER}>
      <div className={CLASSNAME.IMG_WRAPPER}>
        <Image src="/header/LOGO.svg" height={50} width={215} alt="Logo" />
      </div>
      <ul className={CLASSNAME.NAVBAR}>
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
        <li className={CLASSNAME.BUTTON_WRAPPER}>
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
