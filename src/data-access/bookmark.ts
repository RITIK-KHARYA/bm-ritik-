"use server"
import { getSession } from "@/actions/session";
import { prisma } from "@/lib/prisma";
import { redis } from "@/lib/redis";
import { metadata } from "@/lib/types";

export const getBookmarks = async () => {
  const user = await getSession();
  if (!user) {
    throw new Error("Not logged in");
  }
  try {
    const bookmarks = await prisma.bookmark.findMany({
      where: {
        userId: user.user.id,
      },
      include: {
       BookmarkTag: {
        select: {
          tag: {
            select: {
              id: true,
              name: true,
            },
          },
        },
       },
      },
      orderBy:{
        createdAt:"desc"
      }
    })
    const data = bookmarks.map((bookmark) => ({
     ...bookmark,
      tags: bookmark.BookmarkTag.map((tag) => tag.tag.name),
    }));
    
    return {data:data,error:null}
  } catch (error) {
    console.log(error);
    return {data:null,error:error}
  }
};

export const getBookmarkById = async (id: string) => {};
export const getBookmarkBySpace = async (id: string) => {};


export const getBookmarkMetadata = async (url:string) => {
  const cachedMetadata: metadata | null = await redis.get(
    `${url}-metadata`
  );

  return cachedMetadata;
};