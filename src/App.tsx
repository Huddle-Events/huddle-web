import { CreateEventRouter } from "@/pages/create-event/create-event-router.tsx";
import { Events } from "@/pages/events/events.tsx";
import { MainEvent } from "@/pages/events/main-event.tsx";
import { SingleEventLayout } from "@/pages/single-event/single-event-layout.tsx";
import { SingleEvent } from "@/pages/single-event/single-event.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router";

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
        {CreateEventRouter()}
        <Route path="*" element={<Navigate to={"/app"} replace />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
