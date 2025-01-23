import { getSession } from "@/actions/session";
import { prisma } from "@/lib/prisma";

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
    })
    
    return {data:bookmarks,error:null}
  } catch (error) {
    console.log(error);
    return {data:null,error:error}
  }
};

export const getBookmarkById = async (id: string) => {};
export const getBookmarkBySpace = async (id: string) => {};
