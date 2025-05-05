import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
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
                <SidebarMenuButton className={"text-base"} asChild>
                  <span
                    onClick={() => {
                      navigate(`/create-event/${level.url}`);
                    }}
                    className={"cursor-pointer font-sf-pro font-normal"}
                  >
                    {level.title}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
