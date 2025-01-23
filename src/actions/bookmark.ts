"use server";

import { CreateBookmark } from "@/lib/types";
import { getSession } from "./session";
import { prisma } from "@/lib/prisma";
// import ogs from "open-graph-scraper";
// import type { SuccessResult } from "open-graph-scraper/types";
// import { LogoScrape } from 'logo-scrape';
import getMetaData from "metadata-scraper";

export const createBookmark = async (data: CreateBookmark) => {
  const user = await getSession();
  if (!user) {
    throw new Error("Not logged in");
  }
  try {
    const thumbnail = await getMetaData(data.url);
    const bookmark = await prisma.bookmark.create({
      data: { ...data,thumbnail:thumbnail.image },
    });

    return { data: bookmark, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: error };
  }
};



export const deleteBookmark = () => {};

export const updateBookmark = () => {};
