import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <div className="flex flex-col gap-5 bg-background-subtle">
    //   <div>Ralley</div>
    <div className="bg-background-subtle">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
        <div className="pl-14 h-20 flex">
          <span className="m-auto">Ralley</span>
        </div>
      </header>
      <SidebarProvider>
        {/*<AppSidebar className="outline outline-border rounded-lg outline-1 drop-shadow-md overflow-hidden" />*/}
        <AppSidebar className="inset-y-28 inset-x-10 outline outline-border rounded-lg outline-1 drop-shadow-md overflow-hidden" />
        <main className="ml-14 mt-28">{children}</main>
      </SidebarProvider>
    </div>
    // </div>
  );
}
