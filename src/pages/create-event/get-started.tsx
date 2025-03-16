import GetStartedWelcome from "@/assets/get-started-welcome.png";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router";

export const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <div className={"flex gap-2 h-auto"}>
      <div className="flex flex-col gap-4 my-auto">
        <h2 className={"text-5xl font-inter font-bold"}>
          Let's create your event
        </h2>
        <div className="border-b border-b-primary w-1/5" />
        <p className={"text-xl font-normal text-gray-700"}>
          We will take you through making an attractive event to reach your
          audience effectively. You can save your progress at any time, and can
          change details later if needed.
        </p>
        <Button
          className={"bg-black w-fit"}
          onClick={() => {
            navigate("/create-event/title");
          }}
        >
          Let's start
        </Button>
      </div>{" "}
      <img src={GetStartedWelcome} />
    </div>
  );
};
