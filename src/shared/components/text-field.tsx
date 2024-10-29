import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import {
  ColorVariant,
  getOutlineColor,
  getTextColor,
} from "../utils/color.util";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  actionIcon?: ReactNode;
  variant: ColorVariant;
};

export const TextField = forwardRef<HTMLInputElement, Props>(function TextField(
  { variant, className = '', actionIcon, ...props },
  ref
) {
  const classes = `w-full text-base py-2 px-5 rounded-[10px] block outline outline-0 focus:outline-1 active:outline-1 ${getTextColor(
    variant
  )} ${getOutlineColor(variant)}`;
  if (actionIcon) {
    return (
      <div className={`relative ${className}`}>
        <input {...props} className={`pr-10 ${classes}`} ref={ref} />
        <div className="absolute top-2 right-4">{actionIcon}</div>
      </div>
    );
  }
  return <input {...props} className={`${classes} ${className}`} ref={ref} />;
});
