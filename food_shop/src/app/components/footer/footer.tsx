"use client";

import Image from "next/image";
import Link from "next/link";

import Input from "../input/input";
import Button from "../button/button";
import LinksList from "../linksList/linksList";

import { footerList, links, mobileList, socialsList } from "./list";
import { CLASSNAME } from "./classname";

export default function Footer() {
  return (
    <div className={CLASSNAME.WRAPPER}>
      <ul className={CLASSNAME.CONTAINER}>
        <li className={CLASSNAME.CONTENT}>
          <Image src={"/footer/logo2.png"} width={286} height={66} alt="logo" />
          <div className={CLASSNAME.FLEX_START}>
            {mobileList.map(({ link, src }, i) => (
              <a href={link} key={i}>
                <Image
                  src={src}
                  width={180}
                  height={53}
                  alt="logo"
                  className={CLASSNAME.IMG}
                />
              </a>
            ))}
          </div>
          <p className={CLASSNAME.PARAGRAPH}>
            Company # 490039-445, Registered with House of companies.
          </p>
        </li>
        <li className={CLASSNAME.SECOND_CONTENT}>
          <h1 className={CLASSNAME.TITLE}>Get Exclusive Deals in your Inbox</h1>
          <div className={CLASSNAME.SECOND_CONTAINER}>
            <div className={CLASSNAME.IMG_WRAPPER}>
              <Input
                placeholder="youremail@gmail.com"
                variant="Login"
                type="email"
              />
            </div>
            <div className={CLASSNAME.BUTTON_WRAPPER}>
              <Button typeOfButton="submit" variation="submit">
                Subscribe
              </Button>
            </div>
          </div>
          <p className={CLASSNAME.PARAGRAPH_CENTER}>
            we wont spam, read our{" "}
            <a href="" className="underline">
              email policy
            </a>
          </p>
          <div className={CLASSNAME.SOCIALS}>
            {socialsList.map(({ name, src, link }, i) => (
              <Link href={link} key={name}>
                <Image src={src} alt={name} width={45} height={45} />
              </Link>
            ))}
          </div>
        </li>
        {links.map(({ name, list }, i) => (
          <li key={name}>
            <LinksList name={name} list={list} />
          </li>
        ))}
      </ul>
      <div className={CLASSNAME.BOTTOM_SECTION}>
        <p className={CLASSNAME.BOTTOM_PARAGRAPH}>
          Order.uk Copyright 2024, All Rights Reserved.
        </p>
        <div className={CLASSNAME.HIDDEN_LINKS}>
          {footerList.map(({ name, link }, i) => (
            <a href={link} key={name}>
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
