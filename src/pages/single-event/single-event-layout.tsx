import { Header } from "@/components/header.tsx";
import { Outlet } from "react-router";

const SingleEventLayout = () => {
  return (
    <div className={"pt-28 px-14"}>
      <Header />
      <Outlet />
    </div>
  );
};
export { SingleEventLayout };
