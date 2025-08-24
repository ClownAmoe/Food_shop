import Image from "next/image";

export default function MobileImg() {
  return (
    <div className="h-[350px] p-4 rounded-2xl m-auto md:h-[610px] w-full md:w-[1510px] bg-gradient-to-r from-[#EEEEEE] to-[#E0E1DC] border-gray-400 border-2 shadow-2xl flex flex-col-reverse md:flex-row justify-between mt-24">
      <div className="items-left -ml-5 md:ml-0 justify-center md:flex flex-col text-lg h-full w-full">
        <Image
          src="/mobile/mobile.png"
          width={832}
          height={651}
          alt="people"
          className="mb-10 md:ml-2 absolute z-10"
        />
        <Image
          src="/mobile/mobile.png"
          width={832}
          height={651}
          alt="shadow"
          className="mb-16 -ml-1 opacity-20 grayscale absolute"
        />
      </div>
      <div className="flex items-center justify-start w-full flex-col mt-36">
        <div className="flex flex-row items-center justify-center">
          <Image src="header/LOGO.svg" width={268} height={66} alt="logo" />
          <p className="md:text-[68px] text-4xl font-bold mt-3">ing is more</p>
        </div>
        <div className="md:ml-[-100px] inline-block">
          <p className="inline-block text-3xl md:bg-[#03081F] md:text-5xl text-center text-nowrap rounded-full py-4 md:px-30 ml-2">
            <span className="underline text-[#FC8A06]">Personalised</span>
            <span className="text-black md:text-white"> & Instant</span>
          </p>
        </div>
        <p className="text-2xl mt-6">
          Download the Order.uk app for faster ordering
        </p>
        <div className="flex flex-row mt-6">
          <a href="">
            <Image
              src="mobile/apple.svg"
              height={61}
              width={203}
              alt="apple"
              className="h-[61px] w-[203px]"
            />
          </a>
          <a href="">
            <Image
              src="mobile/google.svg"
              height={61}
              width={203}
              alt="google"
              className="h-[61px] w-[203px] rounded-xl"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
