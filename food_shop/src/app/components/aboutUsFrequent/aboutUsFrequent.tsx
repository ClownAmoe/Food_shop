"use client";

import { useState } from "react";

import RadioBtn from "../radioBtn/radioBtn";
import AboutUsCard from "../aboutUsCard/aboutUsCard";

import { aboutList } from "./list";
import { CLASSNAME } from "./classname";

export default function AboutUsFrequent() {
  const content = [
    "How does Order.UK work?",
    "What payment methods are accepted?",
    "Can I track my order in real-time?",
    "Are there any special discounts?",
    "Is Order.UK available in my area?",
  ];

  const [selectedContent, setSelectedContent] = useState<string>(content[0]);

  const handleChange = (newContent: string) => {
    if (newContent !== selectedContent) {
      setSelectedContent(newContent);
    }
  };

  return (
    <div className={CLASSNAME.WRAPPER}>
      <ul className={CLASSNAME.CONTAINER}>
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
      <div className={CLASSNAME.FLEX}>
        <div className={CLASSNAME.CONTENT}>
          {aboutList.map(({ name, src, desc }, i) => (
            <AboutUsCard name={name} src={src} desc={desc} key={i} />
          ))}
        </div>
        <p className={CLASSNAME.TEXT}>
          Order.UK simplifies the food ordering process. Browse through our
          diverse menu, select your favorite dishes, and proceed to checkout.
          Your delicious meal will be on its way to your doorstep in no time!
        </p>
      </div>
    </div>
  );
}
