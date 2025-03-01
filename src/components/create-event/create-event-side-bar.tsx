import { CreateEventSideBarEssential } from "@/components/create-event/create-event-side-bar-essential.tsx";
import { CreateEventSideBarExtra } from "@/components/create-event/create-event-side-bar-extra.tsx";
import { CreateEventSideBarGetStarted } from "@/components/create-event/create-event-side-bar-get-started.tsx";
import { CreateEventSideBarPreferences } from "@/components/create-event/create-event-side-bar-preferences.tsx";
import * as React from "react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator.tsx";

export function CreateEventSideBar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent className={"pt-3 pb-1"}>
        <CreateEventSideBarGetStarted />
        <Separator />
        <CreateEventSideBarEssential />
        <Separator />
        <CreateEventSideBarExtra />
        <Separator />
        <CreateEventSideBarPreferences />
      </SidebarContent>
    </Sidebar>
  );
}
