"use client";

import Image from "next/image";

import Input from "../input/input";
import Button from "../button/button";
import { socialsList } from "./list";
import Link from "next/link";

export default function Footer() {
  const legalLinks = [
    "Terms and conditions",
    "Privacy",
    "Cookies",
    "Modern Slavery Statement",
  ];

  const importantLinks = [
    "Get help",
    "Add your restaurant",
    "Sign up to deliver",
    "Create a business account",
  ];

  return (
    <div className="w-full bg-[#D9D9D9] min-h-[371px] p-20">
      <ul className="flex">
        <li className="flex justify-between gap-6 flex-col">
          <Image src={"/footer/logo2.png"} width={286} height={66} alt="logo" />
          <div className="flex justify-start">
            <Image
              src={"/mobile/apple.svg"}
              width={180}
              height={53}
              alt="logo"
            />
            <Image
              src={"/mobile/google.svg"}
              width={180}
              height={53}
              alt="logo"
            />
          </div>
          <p className="w-2/3">
            Company # 490039-445, Registered with House of companies.
          </p>
        </li>
        <li className="flex items-start flex-col gap-4">
          <h1 className="text-lg font-bold">
            Get Exclusive Deals in your Inbox
          </h1>
          <div className="w-full h-14 flex items-center -ml-2">
            <Input
              placeholder="youremail@gmail.com"
              variant="Login"
              type="email"
            />
            <div className="w-42 h-full mt-2">
              <Button typeOfButton="submit" variation="submit">
                Subscribe
              </Button>
            </div>
          </div>
          <p className="text-sm text-center w-3/4">
            we wont spam, read our email policy
          </p>
          <div className="flex gap-4 justify-between">
            {socialsList.map(({ name, src, link }, i) => (
              <Link href={link} key={i}>
                <Image src={src} alt={name} width={45} height={45} />
              </Link>
            ))}
          </div>
        </li>
        <li>
          <h1>Legal Pages</h1>
        </li>
        <li></li>
      </ul>
      <div></div>
    </div>
  );
}
