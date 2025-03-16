import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const essentialSections: { url: string; title: string }[] = [
  {
    title: "Title & Cover",
    url: "title",
  },
  {
    title: "Audience",
    url: "audience",
  },
  {
    title: "Time & Location",
    url: "time",
  },
  {
    title: "Tickets",
    url: "tickets",
  },
  {
    title: "People",
    url: "people",
  },
];

export const CreateEventSideBarEssential = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel
        className={"font-sf-pro font-medium text-sm text-disabled"}
      >
        Essential Details
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {essentialSections.map((level) => {
            return (
              <SidebarMenuItem key={level.title}>
                <SidebarMenuButton asChild>
                  <div className={"flex flex-row gap-2"}>
                    <a
                      className={"font-sf-pro font-normal text-base"}
                      href={level.url}
                    >
                      {level.title}
                    </a>
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
