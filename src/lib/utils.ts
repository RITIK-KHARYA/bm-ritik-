import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
const urlRegex =
  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\?\S*)?(#\S*)?$/;
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isValidUrl(url: string) {
  return urlRegex.test(url);
}