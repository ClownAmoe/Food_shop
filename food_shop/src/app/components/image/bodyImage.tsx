import Image from "next/image";
import Order from "../order/order";
import Button from "../button/button";
import Input from "../input/input";
export default function BodyImage() {
  return (
    <div className="rounded-2xl m-auto h-[350px] py-5 md:py-0 md:h-[610px] w-full md:max-w-[1510px] bg-gradient-to-r from-[#EEEEEE] to-[#E0E1DC] border-gray-400 border-2 shadow-2xl flex flex-row justify-between mt-[25px]">
      <div className="md:ml-[57px] items-center justify-between md:justify-center flex flex-col text-lg h-full">
        <p className="text-[16px] text-[#03081F]">
          Order Restarant food, takeaway and groceries.
        </p>
        <h1 className="md:text-[54px] text-4xl font-medium text-nowrap text-[#03081F]">
          Feast Your Senses,
        </h1>
        <h1 className="md:text-[54px] text-4xl font-medium text-amber-500">
          Fast and Fresh
        </h1>
        <label htmlFor="search" className="text-[13px] text-[#03081F]">
          Enter a postcode to see what we deliver
        </label>
        <div className="h-[50px] relative flex flex-row justify-center items-center ml-[57px]">
          <Input type="text" variant="Search" placeholder="e.g. EC4R 3TE" />
          <div className="h-full w-[200px] mt-2 -ml-5 z-100">
            <Button typeOfButton="submit" variation="submit">
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="md:flex items-end justify-center h-full hidden">
        <Image
          src="/picture/Eating1.svg"
          width={805}
          height={537}
          alt="eating"
          className="absolute z-30"
        />
      </div>
      <div className="md:flex flex-col justify-end h-full relative hidden">
        <Image
          src="/picture/Eating2.svg"
          width={377}
          height={455}
          alt="eating"
          className="absolute z-10 right-70"
        />

        <Image
          src="/picture/image 1.png"
          width={626}
          height={805}
          alt="eating"
          className="absoulute z-0"
        />
      </div>
      <span className="absolute z-50 right-35 top-[190px] h-[150px] hidden md:inline">
        <Order
          title="We’ve Received your order!"
          text="Awaiting Restaurant acceptance"
          path="picture/1 (2).svg"
        />
      </span>
      <span className="absolute z-50 right-12 top-[370px] h-[150px] hidden md:inline">
        <Order
          title="Order Accepted!"
          text="Your order will be delivered shortly"
          path="/picture/2.svg"
        />
      </span>
      <span className="absolute z-50 right-20 top-[530px] h-[150px] hidden md:inline">
        <Order
          title="Your rider is nearby!"
          text="They're almost there get ready!"
          path="/picture/3.svg"
        />
      </span>
    </div>
  );
}
