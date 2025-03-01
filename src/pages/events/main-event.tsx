import Layout from "@/app/layout.tsx";
import { Header } from "@/components/header.tsx";
import { Outlet } from "react-router";

export const MainEvent = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
};
