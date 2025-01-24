import { Navigate, Route, Routes } from "react-router";
import { MainEvent } from "@/pages/events/main-event.tsx";
import { Events } from "@/pages/events/events.tsx";
import { SingleEvent } from "@/pages/single-event/single-event.tsx";
import { SingleEventLayout } from "@/pages/single-event/single-event-layout.tsx";

function App() {
  return (
    <Routes>
      <Route path="/app" element={<MainEvent />}>
        <Route index element={<Events />} />
      </Route>
      <Route path={"events"} element={<SingleEventLayout />}>
        <Route path=":id" element={<SingleEvent />} />
        <Route path="" element={<Navigate to="/app" replace />} />
      </Route>
      <Route path="*" element={<Navigate to={"/app"} replace />} />
    </Routes>
  );
}

export default App;
