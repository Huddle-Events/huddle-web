import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const extraSections: { url: string; title: string }[] = [
  {
    title: "Content Body",
    url: "/content-body",
  },
  {
    title: "Agenda",
    url: "/agenda",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
  {
    title: "Partners/Sponsors",
    url: "/partners-sponsors",
  },
  {
    title: "Questionnaire",
    url: "/questionnaire",
  },
];

export const CreateEventSideBarExtra = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel
        className={"font-sf-pro font-medium text-sm text-disabled"}
      >
        Extra Information
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {extraSections.map((level) => {
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
