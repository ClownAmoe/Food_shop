import Image from "next/image";

import Button from "../button/button";

import { CLASSNAME } from "./classname";

export default function PartnerCard({
  src,
  topic,
  desc,
  profit,
}: PartnerCardProps) {
  return (
    <div className={CLASSNAME.WRAPPER}>
      <div>
        <Image
          width={500}
          height={500}
          alt={topic}
          src={src}
          className={CLASSNAME.IMG}
        />
      </div>
      <div className={CLASSNAME.PROFIT}>{profit}</div>
      <div className={CLASSNAME.CONTAINER}>
        <p className={CLASSNAME.LG_TEXT}>{desc}</p>
        <h1 className={CLASSNAME.TOPIC}>{topic}</h1>
        <div className={CLASSNAME.BUTTON_WRAPPER}>
          <Button typeOfButton={"reset"} variation={"submit"}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
