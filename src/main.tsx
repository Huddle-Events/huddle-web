import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "@/components/context/AuthContext.tsx";
import { Header } from "@/components/header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-white">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <App />
        </BrowserRouter>
      </AuthProvider>
    </div>
  </StrictMode>,
);
