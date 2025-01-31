import { Button } from "@/components/ui/button.tsx";
import { Share, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator.tsx";
import { useState } from "react";

const Section = ({ text, subtitle }: { text: string; subtitle: string }) => {
  return (
    <div className={"w-1/2 flex flex-col p-4 gap-2"}>
      <span className={"self-center text-sm font-normal leading-5"}>
        {text}
      </span>
      <span className={"self-center text-lg font-semibold leading-[18px]"}>
        {subtitle}
      </span>
    </div>
  );
};

const anchorLinks: { text: string; anchor: string }[] = [
  {
    text: "About",
    anchor: "#about",
  },
  {
    text: "Location",
    anchor: "#location",
  },
  {
    text: "Presenters",
    anchor: "#presenters",
  },
  {
    text: "Agenda",
    anchor: "#agenda",
  },
  {
    text: "Partners & Sponsors",
    anchor: "#partners",
  },
  {
    text: "FAQ",
    anchor: "#faq",
  },
];

const EventSidebar = () => {
  const [save, setSave] = useState(false);
  return (
    <div className="w-[327px] h-[675px] gap-4 flex flex-col rounded-md bg-white shadow-lg border">
      <div className="h-[calc(3*62px)] p-3 w-full flex flex-col gap-4">
        <div className={"flex justify-around"}>
          <Button variant={"ghost"} className={"text-base leading-6"}>
            <Share /> Share
          </Button>
          <Button
            onClick={() => {
              setSave((prev) => !prev);
            }}
            variant={"ghost"}
            className={"text-base leading-6"}
          >
            <Heart fill={save ? "black" : "white"} />
            <span>{save ? "Saved" : "Save"}</span>
          </Button>
        </div>
        <Button className={"h-full text-lg font-medium"}>Get Tickets</Button>
        <div className={"self-center"}>
          <span className={"text-lg font-semibold leading-[30px]"}>$15.00</span>{" "}
          <span>per person</span>
        </div>
      </div>
      <div className={"flex flex-col"}>
        <div className={"flex justify-around border-t"}>
          <Section subtitle={"12 Nov"} text={"Tickets sales end"} />
          <Separator orientation={"vertical"} />
          <Section subtitle={"6"} text={"Spots left"} />
        </div>
        <div className={"flex justify-around border-y"}>
          <Section subtitle={"12"} text={"Attending"} />
          <Separator orientation={"vertical"} />
          <Section subtitle={"9"} text={"Interested"} />
        </div>
      </div>
      <div className={"flex flex-col"}>
        {anchorLinks.map((link) => (
          <Button
            variant={"ghost"}
            key={link.anchor}
            className={"text-base font-medium leading-6 h-[48px] mx-3"}
          >
            {link.text}
          </Button>
        ))}
      </div>
    </div>
  );
};
export { EventSidebar };
