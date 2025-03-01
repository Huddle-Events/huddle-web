import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const getStartedSections: { url: string; title: string }[] = [
  {
    title: "Get Started",
    url: "/get-started",
  },
];

export const CreateEventSideBarGetStarted = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenu>
              {getStartedSections.map((level) => {
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
