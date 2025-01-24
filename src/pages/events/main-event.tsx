import Layout from "@/app/layout.tsx";
import { Outlet } from "react-router";

export const MainEvent = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
