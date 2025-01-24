import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Events } from "@/pages/events/events.tsx";
import { AuthProvider } from "@/components/context/AuthContext.tsx";
import { MainEvent } from "@/pages/events/main-event.tsx";
import { Header } from "@/components/header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-white">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <App />
          {/*<Routes>*/}
          {/*  <Route path="/" element={<App />} />*/}
          {/*  <Route path="/events" element={<MainEvent />} />*/}
          {/*  /!*<Route index element={<Events />} />*!/*/}
          {/*  /!*<Route path="events" element={<Events />} />*!/*/}
          {/*  /!*<Route path="*" element={<Navigate to={"/"} replace />} />*!/*/}
          {/*</Routes>*/}
        </BrowserRouter>
      </AuthProvider>
    </div>
  </StrictMode>,
);
