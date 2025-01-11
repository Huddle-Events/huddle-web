import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import RalleyLogo from "@/assets/RalleyIcon.svg";
import { Button } from "@/components/ui/button.tsx";
import { useLocation } from "react-router";

const menuChoices: { text: string; url: string }[] = [
  { text: "What's on", url: "/whatson" },
  { text: "Communities", url: "/communities" },
  { text: "Resources", url: "/resources" },
  { text: "Overview", url: "/overview" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  console.log({ location });
  return (
    <div className="bg-background-subtle">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
        <div className="pl-14 h-20 flex">
          <img
            src={RalleyLogo}
            alt={"ralley-logo"}
            className={"w-[128px] h-[36px] my-auto mr-auto"}
          />
          <div className="m-auto">
            {menuChoices.map((choice) => {
              return (
                <Button variant={"ghost"} key={choice.text}>
                  {choice.text}
                </Button>
              );
            })}
          </div>
          <div className="ml-auto my-auto mr-3">
            <Button variant={"ghost"}>Login</Button>
            <Button className={"text-primary"} variant={"ghost"}>
              Create
            </Button>
            <Button variant={"default"}>Sign up</Button>
          </div>
        </div>
      </header>
      <SidebarProvider>
        {/*<AppSidebar className="outline outline-border rounded-lg outline-1 drop-shadow-md overflow-hidden" />*/}
        <AppSidebar className="inset-y-28 inset-x-10 outline outline-border rounded-lg outline-1 drop-shadow-md overflow-hidden" />
        <main className="ml-14 mt-28">{children}</main>
      </SidebarProvider>
    </div>
  );
}
