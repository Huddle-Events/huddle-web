import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/header.tsx";
import { Banner } from "@/components/banner";
import { useAuth } from "@/components/context/AuthContext.tsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  const topPositionWithoutBanner = "top-[7rem]";
  const topPositionWithBanner = "top-[38rem]";

  const { isAuthenticated } = useAuth();
  const topPosition = isAuthenticated
    ? topPositionWithoutBanner
    : topPositionWithBanner;
  return (
    <div className="bg-background-subtle">
      <Header />
      {!isAuthenticated && (
        <div className={"absolute top-[5rem]"}>
          <Banner />
        </div>
      )}
      <SidebarProvider>
        <AppSidebar
          className={`${topPosition} bottom-[7rem] inset-x-10 outline outline-border rounded-lg outline-1 drop-shadow-md overflow-hidden`}
        />
        <main className={`absolute ${topPosition} left-[20rem]`}>
          {children}
        </main>
        {/*<main className="ml-14 mt-28">{children}</main>*/}
      </SidebarProvider>
    </div>
  );
}
