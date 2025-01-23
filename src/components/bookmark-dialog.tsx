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

export default function BookmarkDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" h-fit w-fit border border-neutral-700/[0.2] bg-neutral-900 flex flex-row cursor-pointer">
          <Plus className="text-neutral-500  " />
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b border-border px-6 py-4 text-base">
            <Bookmark className="text-neutral-400 border border-neutral-700/[0.2]" />
            New Boookmark
          </DialogTitle>
          <div className="overflow-y-auto">
            <DialogDescription asChild></DialogDescription>
            <DialogFooter className="px-6 pb-6 sm:justify-start">
              <DialogClose asChild>
                <Button type="button">Okay</Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
