import { CreateEventHeader } from "@/components/create-event/create-event-header.tsx";
import { CreateEventSideBar } from "@/components/create-event/create-event-side-bar.tsx";
import { SidebarProvider } from "@/components/ui/sidebar.tsx";
import { CreateEventProvider } from "@/contexts/create-event-context.tsx";
import { Outlet } from "react-router";

const CreateEvent = () => {
  return (
    <CreateEventProvider>
      <CreateEventHeader />
      <SidebarProvider>
        <CreateEventSideBar
          className={`top-[7rem] bottom-[7rem] h-fit inset-x-10 outline outline-border rounded-lg outline-1 drop-shadow-md overflow-hidden`}
        />
        <main className={`absolute top-[7rem] left-[20rem] w-4/5`}>
          <div className={"relative"}>
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </CreateEventProvider>
  );
};

export { CreateEvent };
