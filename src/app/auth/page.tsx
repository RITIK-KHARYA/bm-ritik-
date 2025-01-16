import { BookmarkIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 bg-white items-center justify-center flex ">
        <div className="flex gap-4 ">
          <div className="flex items-center gap-1">
            <div className="flex items-center  border border-neutral-900/90 bg-white rounded-md p-2 text-sm font-medium text-foreground shadow-sm">
              <span className="text-md font-semibold text-black ">
                <BookmarkIcon className="shawdow-md bg-black rounded-md" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );

}