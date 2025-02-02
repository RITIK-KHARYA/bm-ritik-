import { getBookmarks } from "@/data-access/bookmark";
import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { BookmarkCard } from "./bookmark-card";

export default async function BookmarkList() {
  const bookmarks = await getBookmarks();
  if (!bookmarks.data) {
    return(
    <div className="w-full h-full items-center justify-center">
        <div className="flex flex-col items-center bg-nuetral-900 rounded-none p-4 gap-2 ">
            <Bookmark className="text-neutral-500  " />
        </div>
       <span>You have not created any bookmarks yet!</span>
       <span>Create yout first bookmark!</span>
       <Button className="w-full rounded-none font-mono text-neutral-100 disabled:text-neutral-500 bg-neutral-900/60 hover:bg-neutral-900/50 hover:text-neutral-300">Create Bookmark</Button>
    </div>
    )
  }
  if(bookmarks.error){
    return(
      <div className="w-full h-full items-center justify-center">
          <div className="flex flex-col items-center bg-nuetral-900 rounded-none p-4 gap-2 ">
              <Bookmark className="text-neutral-500  " />
          </div>
         <span>Something went wrong!</span>
         <span>Please try again later!</span>
      </div>
    )
  }
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-4 gap-2">
        {bookmarks.data?.map((bookmark) => (
          <BookmarkCard
            key={bookmark.id}
            title={bookmark.title}
            description={bookmark.description}
            url={bookmark.url}
            thumbnail={bookmark.thumbnail}
            tags={bookmark.tags}
          />
        ))}
      </div>
    </div>
  );
}
