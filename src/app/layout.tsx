import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/header.tsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background-subtle">
      <Header />
      <SidebarProvider>
        <AppSidebar className="inset-y-28 inset-x-10 outline outline-border rounded-lg outline-1 drop-shadow-md overflow-hidden" />
        <main className="ml-14 mt-28">{children}</main>
      </SidebarProvider>
    </div>
  );
}
