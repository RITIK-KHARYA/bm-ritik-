import { BookmarkIcon } from "lucide-react";
import { SignInButton, SignUpButton } from "./auth-button";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-neutral-950 px-2 sm:px-16 py-2  border-b border-neutral-900/90 shadow-md">
      <div className="flex gap-4 ">
        <div className="flex items-center gap-1">
          <div className="flex items-center  border border-neutral-900/90 bg-white rounded-md p-2 text-sm font-medium text-foreground shadow-sm">
            <span className="text-md font-semibold text-black ">
              <BookmarkIcon className="shawdow-md bg-black rounded-md" />
            </span>
          </div>
          <span className="ml-2 font-regular text-lg font-mono shadow-md text-gray-100">Pinsphere.ai</span>
        </div>
      </div>
      <div className="">
       <div className="flex sm:gap-2 gap-1 items-center ">
        <SignInButton />
        <SignUpButton />
       </div>

      </div>
    </header>
  );
}
