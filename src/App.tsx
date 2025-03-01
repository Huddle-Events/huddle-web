import { CreateEvent } from "@/pages/create-event/create-event.tsx";
import { GetStarted } from "@/pages/create-event/get-started.tsx";
import { Navigate, Route, Routes } from "react-router";
import { MainEvent } from "@/pages/events/main-event.tsx";
import { Events } from "@/pages/events/events.tsx";
import { SingleEvent } from "@/pages/single-event/single-event.tsx";
import { SingleEventLayout } from "@/pages/single-event/single-event-layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/app" element={<MainEvent />}>
          <Route index element={<Events />} />
        </Route>
        <Route path={"events"} element={<SingleEventLayout />}>
          <Route path=":eventId" element={<SingleEvent />} />
          <Route path="" element={<Navigate to="/app" replace />} />
        </Route>
        <Route path="/create-event" element={<CreateEvent />}>
          <Route path="get-started" element={<GetStarted />} />
          <Route
            path="/create-event"
            element={<Navigate to={"/create-event/get-started"} replace />}
          />
        </Route>
        <Route path="*" element={<Navigate to={"/app"} replace />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
