import { AppSidebar } from "@/components/app-sidebar";
import HeaderMain from "@/components/header-main";
import {
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function MainLayout({children}:{children:React.ReactNode}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div>
        <HeaderMain />
        {children}
        </div>
    </SidebarProvider>
  );
}