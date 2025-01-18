import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx";
import { SearchForm } from "@/components/search-form.tsx";
import { Clock, LucideIcon, Rocket, Users } from "lucide-react";

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
export const AppSidebarDiscoverEvents = () => {
  return (
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
  );
};
