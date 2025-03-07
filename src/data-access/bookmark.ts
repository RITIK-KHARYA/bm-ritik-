"use server"
import { redis } from "@/lib/redis";
import { metadata } from "@/lib/types";

import { headers } from "next/headers";

export const  getBookmarks = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/bookmarks", {
      headers: {
        cookie: (await headers()).get("cookie") || "",
      },
      method: "GET",
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getBookmarkById = async (id: string) => {};
export const getBookmarkBySpace = async (id: string) => {};

export const getBookmarkMetadata = async (url: string) => {
  const cachedMetadata: metadata | null = await redis.get(`${url}-metadata`);

  return cachedMetadata;
};
