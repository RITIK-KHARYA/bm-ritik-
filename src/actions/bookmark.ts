"use server";

import { CreateBookmark } from "@/lib/types";
import { getSession } from "./session";
import { prisma } from "@/lib/prisma";

export const createBookmark = async (data: CreateBookmark) => {
  const user = await getSession();
  if (!user) {
    throw new Error("Not logged in");
  }
  try {
    const bookmar = await prisma.bookmark.create({
      data: {...data}
    });
  } catch (error) {
    
  }
};

export const deleteBookmark = () => {};

export const updateBookmark = () => {};
