import Image from "next/image";

interface OrderProps {
  title: string;
  text: string;
  path: string;
}

export default function Order({ title, text, path }: OrderProps) {
  return (
    <div className="relative h-full w-[390px] right-0">
      <div className="relative h-[102px] w-full -mb-17">
        <Image
          layout="intrinsic"
          src={path}
          width={25}
          height={102}
          alt="number"
          className="absolute right-0 top-0"
        />
      </div>
      <div className="h-[90px] w-[390px] bg-white p-3 absolute rounded-lg">
        <div className="flex flex-row justify-between">
          <Image src="header/LOGO.svg" width={58} height={15} alt="logo" />
          <p className="text-gray-400">now</p>
        </div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}
