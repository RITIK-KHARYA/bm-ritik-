import HeaderMain from "@/components/header-main";
import { AppSidebar } from "@/components/app-sidebar";

import {
  SidebarProvider,
} from "@/components/ui/sidebar";
import ReactQueryProvider from "@/components/providers/query-client-provider";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getBookmarks } from "@/data-access/bookmark";
export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   const query = new QueryClient();
   await query.prefetchQuery({
     queryKey: ["bookmarks"],
     queryFn: async () => {
       const data = await getBookmarks();
       return data;
     },
   });
  //  await query.prefetchQuery({
  //    queryKey: ["space"],
  //    queryFn: async () => {
  //      const data = await getBookmarks();
  //      return data;
  //    },
  //  });
  return (
    <ReactQueryProvider>
      <SidebarProvider suppressHydrationWarning>
        <AppSidebar />
        <main className="w-full bg-[#0F0F10]">
          <HeaderMain />
          <HydrationBoundary state={dehydrate(query)}>{children}</HydrationBoundary>
        </main>
      </SidebarProvider>
    </ReactQueryProvider>
  );
}
