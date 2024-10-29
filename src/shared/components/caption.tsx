import { FC, PropsWithChildren } from "react";
import { ColorVariant, getTextColor } from "../utils/color.util";

type Props = {
  color: ColorVariant;
};

export const Caption: FC<PropsWithChildren<Props>> = ({
  children,
  color = ColorVariant.Initial,
}) => {
  const classes = `text-xs mb-1 ${getTextColor(color)}`;
  return <p className={classes}>{children}</p>;
};
