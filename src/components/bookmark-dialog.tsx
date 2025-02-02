import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bookmark, Plus } from "lucide-react";
import { CreateBookmark } from "./forms/create-bookmark";

export default function BookmarkDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" h-fit w-fit border border-neutral-700/[0.2] bg-neutral-900 flex flex-row cursor-pointer">
          <Plus className="text-neutral-500  " />
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col rounded-none gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left rounded-none">
          <DialogTitle className="border-b border-border p-2 text-base flex flex-row gap-x-2 text-neutral-400 font-mono bg-neutral-900/70">
            <Bookmark className="text-neutral-400 border border-neutral-700/[0.4] p-1 bg-neutral-900 " />
            Add a new bookmark
          </DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto p-3">
          <CreateBookmark/>
        </div>
      </DialogContent>
    </Dialog>
  );
}
