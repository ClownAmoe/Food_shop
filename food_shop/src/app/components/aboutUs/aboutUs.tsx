"use client";

import { useState } from "react";

import RadioBtn from "../radioBtn/radioBtn";
import AboutUsFrequent from "../aboutUsFrequent/aboutUsFrequent";

export default function AboutUs() {
  const [selectedChoise, setSelectedChoise] =
    useState<string>("Frequent Questions");

  const choises = [
    "Frequent Questions",
    "Who we are?",
    "Partner Program",
    "Help & Support",
  ];

  const handleChoiceChange = (newChoice: string) => {
    if (newChoice !== selectedChoise) {
      setSelectedChoise(newChoice);
    }
  };

  return (
    <div className="h-full w-full bg-[#D9D9D9] mt-11 md:mt-14 pb-20 pt-10 mb-11 ">
      <div className="flex items-center justify-around pb-10">
        <h1 className="font-bold text-4xl">Know more about us!</h1>
        <ul className="hidden md:flex">
          {choises.map((choice) => (
            <li key={choice}>
              <RadioBtn
                role={choice}
                onChange={handleChoiceChange}
                checked={selectedChoise === choice}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <AboutUsFrequent />
      </div>
    </div>
  );
}
