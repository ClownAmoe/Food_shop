import { ButtonProps } from "./buttonProps";
import { CLASSNAME } from "./classname";
import Image from "next/image";
export default function Button({
  children,
  click,
  typeOfButton,
  image,
  variation,
}: ButtonProps) {
  let classname = "";
  if (variation === "login") {
    classname = CLASSNAME.LOGIN_BUTTON;
  } else if (variation === "submit") {
    classname = CLASSNAME.SUBMIT_BUTTON;
  }
  function content() {
    {
      if (image !== undefined) {
        return (
          <div className="flex flex-row justify-between gap-2 items-center">
            <Image
              src={image}
              width={25}
              height={25}
              alt="text"
              className="-ml-2"
            />
            <p>{children}</p>
          </div>
        );
      } else {
        return <p>{children}</p>;
      }
    }
  }
  return (
    <button type={typeOfButton} className={classname} onClick={click}>
      {content()}
    </button>
  );
}
