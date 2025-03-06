"use client";
import { createBookmark } from "@/actions/bookmark";
import { getBookmarkMetadata, getBookmarks } from "@/data-access/bookmark";
import { CreateBookmarkSchema, metadata } from "@/lib/types";
import { getWebsiteName } from "@/lib/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { toast } from "sonner";
import axios from "axios";

export const useBookmarks = () => {
  const { data } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: async()=>{
      const res = await axios.get("/api/bookmarks");
      return res.data
    }
  });
  return {
    data: data?.data,
    error: data?.error,
  };
};
export const createBookmarkMutation = () => {
  const query = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["bookmark"],
    mutationFn: async (data: z.infer<typeof CreateBookmarkSchema>) => {
      const res = await createBookmark(data);
      return res;
    },

    onMutate: async (newBookmark) => {
      await query.cancelQueries({ queryKey: ["bookmarks"] });

      const previousBookmarks = query.getQueryData(["bookmarks"]);
      const cachedMetadata:metadata | null = await getBookmarkMetadata(newBookmark.url);
      const bookmark = {
        url:newBookmark.url,
        title: cachedMetadata?.title || getWebsiteName(newBookmark.url),
        thumbnail : cachedMetadata?.image || "",
        tags: newBookmark.tags,
      };
      console.log(bookmark);
      query.setQueryData(["bookmarks"], (old: any) => ({
        ...old,
        data: [bookmark, ...(old?.data || [])],
      }));
     toast.loading("Creating bookmark..." ,{
        id: "create-bookmark",
       duration:5000
     });

      return { previousBookmarks };
    },

    onError: (_error, _newBookmark, context) => {
      if (context?.previousBookmarks) {
        query.setQueryData(["bookmarks"], context.previousBookmarks);
      }
      toast.error("Error creating bookmark", {
        id: "create-bookmark",
        duration: 2000,
      });
    },

    onSettled: () => {
      query.invalidateQueries({ queryKey: ["bookmarks"] });
      toast.success("Bookmark created", {
        id: "create-bookmark",
        duration: 2000,
      });
    },
  });

  return { mutate, isLoading: isPending };
};
