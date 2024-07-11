import { clsx as cn } from "@/libs/utils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({
  className,
  placeholder,
  id,
  ...props
}) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      className={cn(
        " py-2 px-2 outline-none border border-gray-200 outline-1 transition-all w-100 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue focus:ring-opacity-25",
        className
      )}
      {...props}
    />
  );
};

export default Input;