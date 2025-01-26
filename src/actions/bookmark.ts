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
    if(data.spaceId){
      const space = await prisma.space.findUnique({
        where: {
          id: data.spaceId,
        }
      });
      if(!space){
        return {data:null,error:"space not found"}
      }
      const bookmarkInSpace = await prisma.bookmark.create({
        data: {
          userId: user.user.id,
          url: data.url,
          title: metadata?.title,
          description: metadata?.description,
          spaceId: data.spaceId,
        }
      })
      if(!bookmarkInSpace){
        return {data:null,error:"unable to create bookmark in space"}
      }
      return {data:bookmarkInSpace,error:null}
    }
  

    const bookmark = await prisma.bookmark.create({
      data: {
        userId: user.user.id,
        url: data.url,
        title: metadata?.title,
        description: metadata?.description 
      }
    });
    

    return { data: bookmark, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
};



export const deleteBookmark = () => {};

export const updateBookmark = () => {};

