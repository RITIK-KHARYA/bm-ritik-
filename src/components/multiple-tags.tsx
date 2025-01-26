"use client";


import { Label } from "@/components/ui/label";
import { Tag, TagInput } from "emblor";
import { useState } from "react";


export default function MultipleTags({ value, onChange }: { value: string[]; onChange: (value: string[]) => void }) {
  const [tags, setTags] = useState<Tag[]>(()=> value.map(tag => ({id: tag, text: tag})));
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      <Label className="font-mono text-neutral-200">TAGS</Label>
      <TagInput
        tags={tags}
        setTags={(newTags) => {
          setTags(newTags);
          onChange(newTags.map(tag => tag.text));
        }}
        placeholder="Press Enter to add a tag"
        styleClasses={{
          inlineTagsContainer:
            "border-input rounded-none bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 p-1 gap-1 bg-neutral-900/60",
          input:
            "w-full min-w-[80px] focus-visible:outline-none shadow-none px-2 h-7",
          tag: {
            body: "h-7 relative bg-background border border-input hover:bg-neutral-900/60 rounded-none font-medium text-xs ps-2 pe-7",
            closeButton:
              "absolute -inset-y-px -end-px p-0 rounded-e-lg flex size-7 transition-colors outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 text-muted-foreground/80 hover:text-foreground",
          },
        }}
        activeTagIndex={activeTagIndex}
        setActiveTagIndex={setActiveTagIndex}
      />
    </div>
  );
}
