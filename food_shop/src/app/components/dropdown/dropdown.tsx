import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { dropdownProps } from "./type";

export default function Dropdown({ name, options, change }: dropdownProps) {
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setValue(e.target.value);
    change(e.target.value);
  };

  return (
    <div className="relative w-full h-full">
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="appearance-none w-full bg-white border-2 border-black rounded-xl px-6 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-orange"
      >
        <option value="" disabled hidden>
          {name}
        </option>

        {options.map((a) => (
          <option value={a} key={a}>
            {a}
          </option>
        ))}
      </select>

      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          width={18}
          height={18}
          src={"restaurants/arrow.svg"}
          alt={name}
        />
      </motion.div>
    </div>
  );
}
