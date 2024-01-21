import { on } from "events";
import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  title?: string;
  onSubmit?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonPrimary({
  title = "Click me",
  onSubmit,
  ...props
}: ButtonProps) {
  return (
    <button
      onSubmit={onSubmit}
      {...props}
      className={
        "bg-black hover:bg-slate-800 text-white font-bold text-base lg:text-lg py-2 px-4 md:py-3 md:px-6 rounded-full shadow-2xl " +
        props.className
      }
    >
      {title}
    </button>
  );
}
