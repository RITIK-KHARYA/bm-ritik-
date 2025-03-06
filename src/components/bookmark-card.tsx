import { getWebsiteName } from "@/lib/utils";
import { Ellipsis, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BookmarkCardProps {
  id: string;
  title: string | null;
  description: string | null;
  url: string;
  thumbnail: string | null;
  icon: string | null;
  tags: string[];
}

export const BookmarkCard = ({
  id,
  title,
  url,
  thumbnail,
  tags,
  icon
}: BookmarkCardProps) => {
  return (
    <div className="flex flex-col rounded-none border border-neutral-700/[0.2] bg-neutral-900 gap-1 group cursor-pointer h-64" key={id}>
      {/* Image section */}
      <div className="relative w-full h-[60%]">
        <div className="absolute top-0 right-2 group-hover:opacity-100 opacity-0 transition-opacity">
          <Ellipsis className="text-neutral-900" />
        </div>
        <Image
          src={thumbnail && thumbnail != "" ? thumbnail :"/vercel.svg"}
          alt="thumbnail"
          layout="fill"
          objectFit="cover"
          className="rounded-none"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0d0d0d] to-transparent opacity-70"></div>
      </div>
      <div className="p-1 flex flex-col  h-[40%] justify-between">
        <div className="flex-grow">
          <p className="text-sm line-clamp-3  font-mono text-neutral-300">
            {title ?? getWebsiteName(url)}
          </p>
        </div>

        <div className="flex flex-row gap-2 justify-between items-center">
          <div className="flex flex-row gap-2 items-center flex-wrap">
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-neutral-200 border border-neutral-700/[0.4] px-2 py-1 text-xs font-mono hover:bg-neutral-300"
              >
                <span className="text-xs font-mono text-neutral-800">
                  {tag}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-2">
            <Link href={url} target="_blank">
              <Link2
                className="text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-opacity"
                size={24}
              />
            </Link>
            <div className="border border-neutral-700/[0.4] bg-neutral-900 rounded-none p-1 flex flex-row gap-2 items-center">
              <Image
                src={icon && icon != "" ? icon :"/vercel.svg"}
                alt="icon"
                height={20}
                width={20}
                className="rounded-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
