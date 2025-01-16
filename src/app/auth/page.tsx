import { BookmarkIcon } from "lucide-react";
import AuthTabs from "@/components/auth";

export default function Page() {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <div className="w-1/2 bg-black items-center justify-center lg:inline-flex hidden ">
        <div className="flex gap-4 ">
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center border border-neutral-900/90 bg-white rounded-md p-2 text-sm font-medium text-foreground shadow-md size-40">
              <span className="text-md font-semibold text-black size-24 flex items-center justify-center">
                <BookmarkIcon className="shawdow-md bg-black rounded-md size-24" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 ">
        <AuthTabs />
      </div>
    </div>
  );

}