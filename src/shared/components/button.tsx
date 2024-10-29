import { ButtonHTMLAttributes, forwardRef } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { children, className = "", ...props },
  ref
) {
  const classes = `min-w-60 text-base text-center text-white font-bold bg-gradient-to-r from-lightBlue to-blue rounded-[30px] py-3 px-7 ${
    className || ""
  }`;
  return (
    <button {...props} ref={ref} className={classes}>
      {children}
    </button>
  );
});
