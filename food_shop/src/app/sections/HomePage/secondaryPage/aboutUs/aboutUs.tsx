"use client";

import { useState } from "react";

import RadioBtn from "@/app/components/radioBtn/radioBtn";
import AboutUsFrequent from "@/app/components/aboutUsFrequent/aboutUsFrequent";

import { CLASSNAME } from "./classname";

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
    <div className={CLASSNAME.WRAPPER}>
      <div className={CLASSNAME.CONTAINER}>
        <h1 className={CLASSNAME.TITLE}>Know more about us!</h1>
        <ul className={CLASSNAME.CHOICES}>
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
      <div className={CLASSNAME.FREQUENT}>
        <AboutUsFrequent />
      </div>
    </div>
  );
}
