export const containUpperAndLowerLetter = (value: string) => {
  const isContainUpper = /[A-Z]/.test(value);
  const isContainLower = /[a-z]/.test(value);
  return isContainUpper && isContainLower;
};

export const containDigit = (value: string) => {
  return /\d/.test(value);
};

export const minWithoutSpaces = (value: string, length: number) => {
  return value.replace(/\s/g, "").length >= length;
};
