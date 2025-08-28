import Image from "next/image";

import { aboutUsCardProps } from "./type";
import { CLASSNAME } from "./classname";

export default function AboutUsCard({ name, src, desc }: aboutUsCardProps) {
  return (
    <div className={CLASSNAME.WRAPPER}>
      <div className={CLASSNAME.CONTENT}>
        <h1 className={CLASSNAME.TITLE}>{name}</h1>
        <Image width={128} height={128} alt={name} src={src} />
        <p>{desc}</p>
      </div>
    </div>
  );
}
