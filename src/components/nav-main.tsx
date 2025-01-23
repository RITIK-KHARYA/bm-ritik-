"use client"

import { type LucideIcon } from "lucide-react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
  }[]
}) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title} className="rounded-none">
          <SidebarMenuButton
            asChild
            isActive={item.isActive}
            className={cn(
              "rounded-none hover:bg-neutral-900/90",
              item.isActive && "bg-neutral-900/80"
            )}
          >
            <a href={item.url}>
              {item.isActive && (
                <span className="bg-white h-full absolute w-1 top-0 left-0"></span>
              )}

              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
