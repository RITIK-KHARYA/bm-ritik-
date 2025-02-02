import { Bookmark } from "lucide-react";
import Image from "next/image";

interface bookmarkCard {
  title: string | null;
  description: string |null;
  url: string 
  thumbnail: string | null;
  tags: string[];
}
export const BookmarkCard = ({title, description, url, thumbnail, tags}: bookmarkCard) => {
  return (
    <div className="flex flex-col gap-2 rounded-none border border-neutral-700/[0.2] bg-neutral-900 p-4 ">
      <div className="flex flex-row gap-2 items-center">
        <div className="flex gap-2 items-center">
          <Image
          src={thumbnail ?? "/globe.svg"}
          alt="thumbnail"
          width={40}
          height={40}
          className="rounded-none"
          />
        </div>
        <div className="flex items-center gap-2 ">
          <Bookmark className="text-neutral-500  " />
          <span className="text-sm font-mono text-neutral-500">{title}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-xs font-mono text-neutral-500">
            {description}
          </span>
          <span className="text-xs font-mono text-neutral-500">{url}</span>
        </div>
      </div>

      {tags.map((tag) => (
        <div key={tag} className="flex gap-2 items-center">
          <span className="text-xs font-mono text-neutral-500">{tag}</span>
        </div>
      ))}
    </div>
  );
};