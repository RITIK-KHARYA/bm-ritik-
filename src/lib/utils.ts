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

export const getWebsiteName = (url:string):string => {
  const hostname = new URL(url).hostname;
  console.log(hostname);
  const parts = hostname.split(".").filter((part) => part !== "www");
  console.log(parts);
  console.log(parts.length);

  if (parts.length > 2) {
    return parts[parts.length - 2];
  }

  return parts[0];
};