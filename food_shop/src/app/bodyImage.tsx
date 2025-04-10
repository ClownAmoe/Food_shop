import Image from "next/image";
import Order from "./order";
export default function BodyImage() {
  return (
    <div className="rounded-2xl m-auto h-[610px] w-[1510px] bg-[url('/Rectangle 2.png')] border-gray-400 border-2 shadow-2xl flex flex-row justify-between mt-[25px]">
      <div className="ml-[57px] items-left justify-center flex flex-col text-lg h-full">
        <p className="text-[16px] text-[#03081F]">
          Order Restarant food, takeaway and groceries.
        </p>
        <h1 className="text-[54px] text-[#03081F]">Feast Your Senses,</h1>
        <h1 className="text-[54px] text-amber-500">Fast and Fresh</h1>
        <label htmlFor="search" className="text-[13px] text-[#03081F]">
          Enter a postcode to see what we deliver
        </label>
        <p className="h-[50px] relative">
          <input
            type="text"
            id="search"
            placeholder="e.g. EC4R 3TE"
            className="border-gray-400 border-[1px] rounded-4xl h-[50px] w-[300px] mt-2 text-md pl-4"
          />
          <button
            type="submit"
            className="bg-amber-500 h-[51px] w-[133px] rounded-4xl -ml-16"
          >
            Search
          </button>
        </p>
      </div>
      <div className="flex items-end justify-center h-full">
        <Image
          src="/Eating1.svg"
          width={805}
          height={537}
          alt="eating"
          className="absolute z-30"
        />
      </div>
      <div className="flex flex-col justify-end h-full relative">
        <Image
          src="/Eating2.svg"
          width={377}
          height={455}
          alt="eating"
          className="absolute z-10 right-70"
        />

        <Image
          src="/image 1.png"
          width={626}
          height={805}
          alt="eating"
          className="absoulute -z-50"
        />
      </div>
      <span className="absolute z-50 right-35 top-[190px] h-[150px]">
        <Order
          title="We’ve Received your order!"
          text="Awaiting Restaurant acceptance"
          path="/1 (2).svg"
        />
      </span>
      <span className="absolute z-50 right-12 top-[370px] h-[150px]">
        <Order
          title="Order Accepted!"
          text="Your order will be delivered shortly"
          path="/2.svg"
        />
      </span>
      <span className="absolute z-50 right-20 top-[530px] h-[150px]">
        <Order
          title="Your rider is nearby!"
          text="They're almost there get ready!"
          path="/3.svg"
        />
      </span>
    </div>
  );
}
