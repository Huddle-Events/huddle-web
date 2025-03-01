import RalleyLogo from "@/assets/RalleyIcon.svg";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router";

export const CreateEventHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="pl-14 h-20 flex">
        <img
          src={RalleyLogo}
          alt={"ralley-logo"}
          className={"w-[128px] h-[36px] my-auto mr-auto"}
        />

        <div className="ml-auto my-auto mr-3 flex gap-2">
          <Button className={"border-border"} variant={"outline"}>
            Preview
          </Button>
          <Button
            onClick={() => {
              navigate("/app");
            }}
            className={"border-border"}
            variant={"outline"}
          >
            Save & Exit
          </Button>
          <Button>Publish</Button>
        </div>
      </div>
    </header>
  );
};
