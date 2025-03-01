import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const essentialSections: { url: string; title: string }[] = [
  {
    title: "Preferences",
    url: "/preferences",
  },
];

export const CreateEventSideBarPreferences = () => {
  return (
    <SidebarGroup>
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
