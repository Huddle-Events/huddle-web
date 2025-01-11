import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
// import { Home } from "@/pages/home/home.tsx";
import { Inbox } from "@/pages/inbox/inbox.tsx";
import { Events } from "@/pages/events/events.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Events />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="events" element={<Events />} />
            <Route path="*" element={<Navigate to={"/"} replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>,
);
