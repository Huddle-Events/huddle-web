import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SearchForm } from "@/components/search-form.tsx";
import { Clock, LucideIcon, Rocket, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator.tsx";
import { Button } from "@/components/ui/button.tsx";

const topLevels: { url: string; title: string; icon: LucideIcon }[] = [
  {
    title: "Upcoming",
    url: "/upcoming",
    icon: Clock,
  },
  {
    title: "Trending",
    url: "/trending",
    icon: Rocket,
  },
  {
    title: "In my network",
    url: "/network",
    icon: Users,
  },
];

const industryLevels: { url: string; title: string }[] = [
  {
    title: "Accounting",
    url: "/events?filter=accounting",
  },
  {
    title: "Administration",
    url: "/events?filter=administration",
  },
  {
    title: "Agriculture",
    url: "/events?filter=agriculture",
  },
  {
    title: "Architecture",
    url: "/events?filter=architecture",
  },
  {
    title: "Banking",
    url: "/events?filter=banking",
  },
  {
    title: "Communication",
    url: "/events?filter=communication",
  },
];
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Discover Events</SidebarGroupLabel>
          <SearchForm />
          <SidebarGroupContent>
            <SidebarMenu>
              {topLevels.map((level) => {
                return (
                  <SidebarMenuItem key={level.title}>
                    <SidebarMenuButton asChild>
                      <div className={"flex flex-row gap-2"}>
                        <level.icon />
                        <a href={level.url}>{level.title}</a>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator />
        <SidebarGroup>
          <SidebarGroupLabel>My Events</SidebarGroupLabel>
          <div
            className={
              "bg-background-subtle py-6 px-4 flex flex-col gap-2 rounded-xl"
            }
          >
            <p>Log in to view your active events.</p>
            <Button variant={"outline"}>Log in</Button>
          </div>
        </SidebarGroup>
        <Separator />
        <SidebarGroup>
          <SidebarGroupLabel>Industry</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {industryLevels.map((level) => {
                return (
                  <SidebarMenuItem key={level.title}>
                    <SidebarMenuButton asChild>
                      <div className={"flex flex-row gap-2"}>
                        <a href={level.url}>{level.title}</a>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
