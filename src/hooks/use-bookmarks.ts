"use client";
import { createBookmark } from "@/actions/bookmark";
import { getBookmarks } from "@/data-access/bookmark";
import { CreateBookmarkSchema } from "@/lib/types";
import { getWebsiteName } from "@/lib/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { toast } from "sonner";

export const useBookmarks = () => {
  const { data } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: getBookmarks,
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
      const bookmark = {
        url: newBookmark.url,
        title: getWebsiteName(newBookmark.url),
        tags: newBookmark.tags,
      };
      query.setQueryData(["bookmarks"], (old: any) => ({
        ...old,
        data: [...(old?.data || []), bookmark],
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
