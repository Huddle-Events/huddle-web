import "./App.css";
import Layout from "@/app/layout.tsx";
import { Outlet } from "react-router";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
