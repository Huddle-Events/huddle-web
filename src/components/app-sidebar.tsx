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
// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: true,
        },
        {
          title: "Rendering",
          url: "#",
        },
        {
          title: "Caching",
          url: "#",
        },
        {
          title: "Styling",
          url: "#",
        },
        {
          title: "Optimizing",
          url: "#",
        },
        {
          title: "Configuring",
          url: "#",
        },
        {
          title: "Testing",
          url: "#",
        },
        {
          title: "Authentication",
          url: "#",
        },
        {
          title: "Deploying",
          url: "#",
        },
        {
          title: "Upgrading",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
    {
      title: "API Reference",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
        {
          title: "next.config.js Options",
          url: "#",
        },
        {
          title: "CLI",
          url: "#",
        },
        {
          title: "Edge Runtime",
          url: "#",
        },
      ],
    },
    {
      title: "Architecture",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "Next.js Compiler",
          url: "#",
        },
        {
          title: "Supported Browsers",
          url: "#",
        },
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
  ],
};
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
    url: "/accounting",
  },
  {
    title: "Administration",
    url: "/administration",
  },
  {
    title: "Agriculture",
    url: "/agriculture",
  },
  {
    title: "Architecture",
    url: "/architecture",
  },
  {
    title: "Banking",
    url: "/banking",
  },
  {
    title: "Communication",
    url: "/communication",
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
                        <a href={"/"}>{level.title}</a>
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
                        <a href={"/"}>{level.title}</a>
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
