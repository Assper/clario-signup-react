import { FC, PropsWithChildren } from "react";

type Props = {
  className?: string;
};

export const Title: FC<PropsWithChildren<Props>> = ({
  children,
  className = "",
}) => {
  const classes = `text-3xl text-center font-bold ${className}`;
  return <h1 className={classes}>{children}</h1>;
};
