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

export const getWebsiteName = (url: string): string => {
  try {

    const hostname = new URL(url).hostname;
    console.log(hostname);
    console.log(new URL(url));


    let domain = hostname.replace(/^www\./, "");

    domain = domain.split(".")[0];

    return domain;
  } catch (error) {
    console.error("Invalid URL:", url);
    return url; // Return original URL if there's an error
  }
};