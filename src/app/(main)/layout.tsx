import HeaderMain from "@/components/header-main";
import { AppSidebar } from "@/components/app-sidebar";

import {
  SidebarProvider,
} from "@/components/ui/sidebar";
import ReactQueryProvider from "@/components/providers/query-client-provider";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <SidebarProvider suppressHydrationWarning>
        <AppSidebar />
        <main className="w-full bg-[#0F0F10]">
          <HeaderMain />
          {children}
        </main>
      </SidebarProvider>
    </ReactQueryProvider>
  );
}
