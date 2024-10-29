export enum ColorVariant {
  Error = "error",
  Success = "success",
  Initial = "initial",
}

export const getIconColor = (color: ColorVariant) => {
  if (color === ColorVariant.Success) return "#27B274";
  if (color === ColorVariant.Error) return "#FF8080";
  return "#6F91BC";
};

export const getTextColor = (color: ColorVariant) => {
  if (color === ColorVariant.Success) return "text-success";
  if (color === ColorVariant.Error) return "text-error";
  return "text-initial";
};

export const getOutlineColor = (color: ColorVariant) => {
  if (color === ColorVariant.Success) return "outline-success";
  if (color === ColorVariant.Error) return "outline-error";
  return "outline-lightgray";
};

export const getBgColor = (color: ColorVariant) => {
  if (color === ColorVariant.Success) return "bg-success/50";
  if (color === ColorVariant.Error) return "bg-error/50";
  return "bg-white/50";
};
