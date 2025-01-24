import Layout from "@/app/layout.tsx";
import { Navigate, Outlet, Route, Routes } from "react-router";
import { Header } from "@/components/header.tsx";
import { MainEvent } from "@/pages/events/main-event.tsx";
import { Events } from "@/pages/events/events.tsx";

function App() {
  return (
    <Routes>
      <Route path="/events" element={<MainEvent />}>
        <Route index element={<Events />} />
      </Route>
      {/*<Route path="*" element={<Navigate to={"/events"} replace />} />*/}
    </Routes>
  );
}

export default App;
