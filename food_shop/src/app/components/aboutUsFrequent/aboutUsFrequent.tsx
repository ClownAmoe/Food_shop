"use client";

import { useState } from "react";
import RadioBtn from "../radioBtn/radioBtn";
import { aboutList } from "./list";
import AboutUsCard from "../aboutUsCard/aboutUsCard";

export default function AboutUsFrequent() {
  const content = [
    "How does Order.UK work?",
    "What payment methods are accepted?",
    "Can I track my order in real-time?",
    "Are there any special discounts or promotions available?",
    "Is Order.UK available in my area?",
  ];

  const [selectedContent, setSelectedContent] = useState<string>(content[0]);

  const handleChange = (newContent: string) => {
    if (newContent !== selectedContent) {
      setSelectedContent(newContent);
    }
  };

  return (
    <div className="flex w-[95%] flex-col items-center md:flex-row rounded-xl bg-white p-8 pt-10 h-[525px] ">
      <ul className="flex flex-col gap-8 justify-center text-sm items-center font-bold w-1/2 whitespace-nowrap text-center md:text-lg">
        {content.map((cont) => (
          <li key={cont}>
            <RadioBtn
              role={cont}
              onChange={handleChange}
              checked={cont === selectedContent}
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row gap-4 h-full mt-8">
          {aboutList.map(({ name, src, desc }, i) => (
            <AboutUsCard name={name} src={src} desc={desc} key={i} />
          ))}
        </div>
        <p className="w-full md:w-5/6 text-base mt-4 text-center">
          Order.UK simplifies the food ordering process. Browse through our
          diverse menu, select your favorite dishes, and proceed to checkout.
          Your delicious meal will be on its way to your doorstep in no time!
        </p>
      </div>
    </div>
  );
}
