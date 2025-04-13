import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  click?: () => void;
  typeOfButton: "reset" | "submit";
  image?: string;
  variation: string;
};

export type props = {
  btn: ButtonProps;
};
