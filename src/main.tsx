import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "@/pages/home/home.tsx";
import { Inbox } from "@/pages/inbox/inbox.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="inbox" element={<Inbox />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>,
);
