import HeaderMain from "@/components/header-main";
import { AppSidebar } from "@/components/app-sidebar";

import {
  SidebarProvider,
} from "@/components/ui/sidebar";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider suppressHydrationWarning>
      <AppSidebar />
      <main className="w-full bg-[#0F0F10]">
        <HeaderMain />
        {children}
      </main>
    </SidebarProvider>
  );
}
