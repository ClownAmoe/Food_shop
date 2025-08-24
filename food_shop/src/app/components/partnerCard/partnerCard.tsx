import Image from "next/image";
import Button from "../button/button";

export default function PartnerCard({
  src,
  topic,
  desc,
  profit,
}: PartnerCardProps) {
  return (
    <div className="w-full h-full md:w-1/2 bg-red md:h-[425px] rounded-2xl relative bg-gradient-to-tr from-black via-gray to-transparent">
      <div>
        <Image
          width={500}
          height={500}
          alt={topic}
          src={src}
          className="w-full h-full relative object-cover -z-10"
        />
      </div>
      <div className="text-sm font-bold bg-white absolute top-0 left-1/10 rounded-br-xl rounded-bl-xl p-4">
        {profit}
      </div>
      <div className="w-1/2 absolute left-1/8 bottom-1/10 text-white gap-2 md:gap-6 flex flex-col items-start justify-start text-left">
        <p className="text-lg">{desc}</p>
        <h1 className="font-bold md:text-5xl text-2xl">{topic}</h1>
        <div className="w-3/4 h-3/4 md:w-52 md:h-14 flex flex-col items-center justify-center ml-8">
          <Button typeOfButton={"reset"} variation={"submit"}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
