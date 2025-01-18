import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useAuth } from "@/components/context/AuthContext.tsx";
import { Ticket, Star, MailOpen, Flag, Undo2, LucideIcon } from "lucide-react";

const sections: { url: string; title: string; icon: LucideIcon }[] = [
  {
    title: "Attending",
    icon: Ticket,
    url: "/attending",
  },
  {
    title: "Interested",
    icon: Star,
    url: "/interested",
  },
  {
    title: "Invitations",
    icon: MailOpen,
    url: "/invitations",
  },
  {
    title: "Hosting",
    icon: Flag,
    url: "/hosting",
  },
  {
    title: "Past Events",
    icon: Undo2,
    url: "/past-events",
  },
];

export const AppSidebarMyEvents = () => {
  const { isAuthenticated, login } = useAuth();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>My Events</SidebarGroupLabel>
      {isAuthenticated ? (
        <SidebarMenu>
          {sections.map((section) => {
            return (
              <SidebarMenuItem key={section.title}>
                <SidebarMenuButton asChild>
                  <div className={"flex flex-row gap-2"}>
                    <section.icon />
                    <a href={section.url}>{section.title}</a>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
          <Button>Create Events</Button>
        </SidebarMenu>
      ) : (
        <div
          className={
            "bg-background-subtle py-6 px-4 flex flex-col gap-2 rounded-xl"
          }
        >
          <p>Log in to view your active events.</p>
          <Button variant={"outline"} onClick={login}>
            Log in
          </Button>
        </div>
      )}
    </SidebarGroup>
  );
};
