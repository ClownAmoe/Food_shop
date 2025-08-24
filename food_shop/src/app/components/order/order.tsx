import Image from "next/image";

import { CLASSNAME } from "./classname";

interface OrderProps {
  title: string;
  text: string;
  path: string;
}

export default function Order({ title, text, path }: OrderProps) {
  return (
    <div className={CLASSNAME.WRAPPER}>
      <div className={CLASSNAME.IMG_CONTAINER}>
        <Image
          layout="intrinsic"
          src={path}
          width={25}
          height={102}
          alt="number"
          className={CLASSNAME.IMG}
        />
      </div>
      <div className={CLASSNAME.CONTAINER}>
        <div className={CLASSNAME.FLEX}>
          <Image src="header/LOGO.svg" width={58} height={15} alt="logo" />
          <p className={CLASSNAME.PARAGRAPH}>now</p>
        </div>
        <p className={CLASSNAME.LG_PARAGRAPH}>{title}</p>
        <p className={CLASSNAME.SM_PARAGRAPH}>{text}</p>
      </div>
    </div>
  );
}
