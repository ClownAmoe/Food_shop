"use client";

import Image from "next/image";

import Input from "../input/input";
import Button from "../button/button";
import { importantLinks, legalLinks, mobileList, socialsList } from "./list";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-[#D9D9D9] min-h-[371px] pt-20 px-16">
      <ul className="flex justify-between">
        <li className="flex justify-between gap-10 flex-col">
          <Image src={"/footer/logo2.png"} width={286} height={66} alt="logo" />
          <div className="flex justify-start">
            {mobileList.map(({ link, src }, i) => (
              <a href={link} key={i}>
                <Image
                  src={src}
                  width={180}
                  height={53}
                  alt="logo"
                  className="h-full object-contain"
                />
              </a>
            ))}
          </div>
          <p className="w-2/3">
            Company # 490039-445, Registered with House of companies.
          </p>
        </li>
        <li className="flex items-start flex-col gap-8">
          <h1 className="text-lg font-bold">
            Get Exclusive Deals in your Inbox
          </h1>
          <div className="w-full h-14 flex items-center justify-between ">
            <div className="w-full h-14 -ml-2 ">
              <Input
                placeholder="youremail@gmail.com"
                variant="Login"
                type="email"
              />
            </div>
            <div className="w-42 h-full mt-4">
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
          <h1 className="mb-4 text-lg font-bold">Legal Pages</h1>
          <div className="flex flex-col gap-9 text-md">
            {legalLinks.map(({ name, link }, i) => (
              <a href={link} key={i} className="underline">
                {name}
              </a>
            ))}
          </div>
        </li>
        <li>
          <h1 className="mb-4 text-lg font-bold">Important Links</h1>
          <div className="flex flex-col gap-9 text-md">
            {importantLinks.map(({ name, link }, i) => (
              <a href={link} key={i} className="underline">
                {name}
              </a>
            ))}
          </div>
        </li>
      </ul>
      <div></div>
    </div>
  );
}
