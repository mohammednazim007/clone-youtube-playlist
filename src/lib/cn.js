import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputProps) => {
  return twMerge(clsx(inputProps));
};

export default cn;
