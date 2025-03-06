import { Hono } from "hono";
import { getBookmarks } from "./bookmark";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/actions/session";

const bookmarkApp = new Hono().get("/", async (c) => {
  const user = await getSession();
  if (!user) {
    throw new Error("Not logged in");
  }
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
    orderBy: {
      createdAt: "desc",
    },
    take:5
  });
  const data = bookmarks.map((bookmark) => ({
    ...bookmark,
    tags: bookmark.BookmarkTag.map((tag) => tag.tag.name),
  }));

  return c.json({
    message: "Hello Next.js!",
    bookmarks: data,
  });
});

export default bookmarkApp;
