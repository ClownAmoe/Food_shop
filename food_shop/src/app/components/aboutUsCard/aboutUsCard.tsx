import Image from "next/image";

import { aboutUsCardProps } from "./type";

export default function AboutUsCard({ name, src, desc }: aboutUsCardProps) {
  return (
    <div className="bg-[#D9D9D9] h-full w-64 rounded-xl shadow-lg">
      <div className="flex flex-col items-center justify-center h-full gap-8 text-center p-4">
        <h1 className="font-bold">{name}</h1>
        <Image width={128} height={128} alt={name} src={src} />
        <p>{desc}</p>
      </div>
    </div>
  );
}
