import Image from "next/image";
import { CLASSNAME } from "./CLASSNAME";
export default function Header() {
  return (
    <div className="w-full h-16 flex flex-row justify-between p-6 items-end mt-4">
      <div>
        <Image src="/LOGO 1.svg" height={50} width={215} alt="Logo" />
      </div>
      <ul className="flex flex-row justify-between w-[1000px] items-end gap-6">
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
        <li>
          <a href="#" className={CLASSNAME.HEADER_BUTTON}>
            <div className="flex flex-row items-center">
              <Image
                src="/Male User.svg"
                height={27}
                width={31}
                alt="Logo"
                className="-ml-2 mr-2"
              />
              Login/Sign up
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
