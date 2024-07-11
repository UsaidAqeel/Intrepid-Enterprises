"use client";

import { clsx } from "@/libs/utils";
import React, { FC } from "react";

type ButtonVariant = "primary" | "outline" | "outline-white";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const buttonVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return "text-white bg-primary-blue px-6 md:px-12 py-3 rounded-md text-sm sm:text-md hover:bg-gray-400 transition-colors duration-300";
    case "outline":
      return "text-white border-primary-blue border-2  px-6 md:px-12 py-3  text-sm rounded-md sm:text-md hover:bg-primary-blue hover:text-white transition-colors duration-300";
    case "outline-white":
      return "text-primary-blue bg-white border-white border px-6 md:px-12 py-3  text-sm rounded-md sm:text-md hover:bg-primary-blue hover:text-white transition-colors duration-300 ";
  }
};

const Button: FC<Props> = ({ variant, ...props }) => {
  const _className = clsx(variant && buttonVariant(variant), props.className);
  return <button {...props} className={_className + " montserrat font-bold"} />;
};

export default Button;
