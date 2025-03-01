import RalleyLogo from "@/assets/RalleyIcon.svg";
import { Button } from "@/components/ui/button.tsx";
import { useAuth } from "@/components/context/AuthContext.tsx";
import { HeaderAvatar } from "@/components/header-avatar.tsx";
import { useNavigate } from "react-router";

const menuChoices: { text: string; url: string }[] = [
  { text: "What's on", url: "/app" },
  { text: "Communities", url: "/communities" },
  { text: "Resources", url: "/resources" },
  { text: "Overview", url: "/overview" },
];

export const Header = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
      <div className="pl-14 h-20 flex">
        <img
          src={RalleyLogo}
          alt={"ralley-logo"}
          className={"w-[128px] h-[36px] my-auto mr-auto"}
        />
        <div className="m-auto">
          {menuChoices.map((choice) => {
            return (
              <Button
                variant={"ghost"}
                className={"font-medium text-base text-color-text"}
                key={choice.text}
                onClick={() => {
                  navigate(choice.url);
                }}
              >
                {choice.text}
              </Button>
            );
          })}
        </div>
        {isAuthenticated ? (
          <div className="ml-auto my-auto mr-3 flex flex-row">
            <Button
              className={"text-primary"}
              variant={"ghost"}
              onClick={() => {
                navigate("/create-event");
              }}
            >
              Create
            </Button>
            <HeaderAvatar />
          </div>
        ) : (
          <div className="ml-auto my-auto mr-3">
            <Button variant={"ghost"} onClick={login}>
              Login
            </Button>

            <Button variant={"default"}>Sign up</Button>
          </div>
        )}
      </div>
    </header>
  );
};
