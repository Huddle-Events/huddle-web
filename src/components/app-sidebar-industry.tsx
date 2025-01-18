import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx";

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
export const AppSidebarIndustry = () => {
  return (
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
  );
};
