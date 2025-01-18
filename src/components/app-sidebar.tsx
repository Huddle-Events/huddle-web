import * as React from "react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator.tsx";
import { AppSidebarDiscoverEvents } from "@/components/app-sidebar-discover-events.tsx";
import { AppSidebarMyEvents } from "@/components/app-sidebar-my-events.tsx";
import { AppSidebarIndustry } from "@/components/app-sidebar-industry.tsx";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <AppSidebarDiscoverEvents />
        <Separator />
        <AppSidebarMyEvents />
        <Separator />
        <AppSidebarIndustry />
      </SidebarContent>
    </Sidebar>
  );
}
