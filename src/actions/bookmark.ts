"use server";
import { getSession } from "./session";
import { prisma } from "@/lib/prisma";
import { getMetadata } from "@/lib/extracter";
import { CreateBookmark } from "@/lib/types";
import { isValidUrl } from "@/lib/utils";

export const createBookmark = async (data: CreateBookmark) => {
  const user = await getSession();
  if (!user) {
    throw new Error("Not logged in");
  }

  try {
    const isUrlValid = isValidUrl(data.url);
    if (!isUrlValid) {
      throw new Error("Invalid URL");
    }

    const metadata = await getMetadata(data.url);
    console.log(metadata?.icon);

    const result = await prisma.$transaction(async (prisma) => {
      const bookmark = await prisma.bookmark.create({
        data: {
          userId: user.user.id,
          url: data.url,
          title: metadata?.title,
          thumbnail: metadata?.image,
          description: metadata?.description,
          icon: metadata?.icon,
          spaceId: data.spaceId || null,
        },
      });

      if (data.tags && data.tags.length > 0) {
        const existingTags = await prisma.tag.findMany({
          where: {
            name: { in: data.tags },
            userId: user.user.id,
          },
        });
        console.log("already", existingTags);

        const existingTagNames = existingTags.map((tag) => tag.name);

        const newTags = data.tags.filter(
          (tagName) => !existingTagNames.includes(tagName)
        );

        if (newTags.length > 0) {
          await prisma.tag.createMany({
            data: newTags.map((tagName) => ({
              name: tagName,
              userId: user.user.id,
            })),
          });
        }

        const allTags = await prisma.tag.findMany({
          where: {
            name: { in: data.tags },
            userId: user.user.id,
          },
        });
        console.log("all", allTags);

        await prisma.bookmarkTag.createMany({
          data: allTags.map((tag) => ({
            bookmarkId: bookmark.id,
            tagId: tag.id,
          })),
        });
      }

      return bookmark;
    });

    return { data: result, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
};

export const deleteBookmark = async () => {};

export const updateBookmark = async () => {};
