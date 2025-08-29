"use client";

import Image from "next/image";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import Button from "../button/button";

import { CLASSNAME } from "./classname";
import { links, mobileMenuList } from "./list";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className={CLASSNAME.WRAPPER}>
      <div>
        <a href="#">
          <Image src="/header/LOGO.svg" height={50} width={215} alt="Logo" />
        </a>
      </div>
      <ul className={CLASSNAME.NAVBAR}>
        {links.map(({ title, href }, i) => (
          <li key={i}>
            <a href={href} className={CLASSNAME.HEADER_TEXT}>
              {title}
            </a>
          </li>
        ))}
        <li className={CLASSNAME.BUTTON_WRAPPER}>
          <Button
            typeOfButton="submit"
            variation="login"
            image="header/Male User.svg"
          >
            Log in
          </Button>
        </li>
      </ul>
      <div>
        <div className={CLASSNAME.BURGER_BUTTON}>
          <Button
            typeOfButton={"submit"}
            variation={""}
            click={toggleMobileMenu}
          >
            <Image width={65} height={65} alt="menu" src={"/header/Menu.svg"} />
          </Button>
        </div>
        {isOpenMenu && (
          <>
            <motion.div
              className={CLASSNAME.DARKER}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            <AnimatePresence>
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={CLASSNAME.MENU_WRAPPER}
              >
                <li className={CLASSNAME.MENU_TITLE}>
                  <Image
                    width={55}
                    height={55}
                    alt="menu"
                    src={"/header/MenuIcon.svg"}
                  />
                  Menu
                </li>
                {mobileMenuList.map(({ title, href }, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    className={CLASSNAME.LINK}
                    onClick={toggleMobileMenu}
                  >
                    <a href={href} className={CLASSNAME.HEADER_TEXT}>
                      {title}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
}
