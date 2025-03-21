import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function classNames(...classLists: ClassValue[]) {
  return twMerge(clsx(classLists));
}
