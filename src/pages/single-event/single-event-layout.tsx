import { Outlet } from "react-router";

const SingleEventLayout = () => {
  return (
    <div className={"pt-28 px-14"}>
      <Outlet />
    </div>
  );
};
export { SingleEventLayout };
