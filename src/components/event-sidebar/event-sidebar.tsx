import { EventShareDialog } from "@/components/event-sidebar/event-share-dialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { format } from "date-fns";
import { Heart } from "lucide-react";

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

type Props = {
  isSaved: boolean;
  price: number;
  endDate: Date;
  numberOfSpotLeft: number;
  numberOfAttendants: number;
  numberOfInterested: number;
  anchorLinks: { text: string; anchorLink: string }[];
  setIsSaved: () => void;
  eventTitle: string;
};
const EventSidebar = ({
  endDate,
  isSaved,
  numberOfInterested,
  numberOfAttendants,
  numberOfSpotLeft,
  price,
  anchorLinks,
  setIsSaved,
  eventTitle,
}: Props) => {
  return (
    <div className="w-[327px] h-fit pb-3 gap-4 flex flex-col rounded-md bg-white shadow-lg border">
      <div className="h-[calc(3*62px)] p-3 w-full flex flex-col gap-4">
        <div className={"flex justify-around"}>
          <EventShareDialog eventTitle={eventTitle} />
          <Button
            onClick={() => {
              setIsSaved();
            }}
            variant={"ghost"}
            className={"text-base leading-6"}
          >
            <Heart fill={isSaved ? "black" : "white"} />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </Button>
        </div>
        <Button className={"h-full text-lg font-medium"}>Get Tickets</Button>
        <div className={"self-center"}>
          <span
            className={"text-lg font-semibold leading-[30px]"}
          >{`$${price.toFixed(2)}`}</span>{" "}
          <span>per person</span>
        </div>
      </div>
      <div className={"flex flex-col"}>
        <div className={"flex justify-around border-t"}>
          <Section
            subtitle={format(endDate, "dd MMM")}
            text={"Tickets sales end"}
          />
          <div className={"border"} />
          <Separator orientation={"vertical"} className={""} />
          <Section subtitle={numberOfSpotLeft.toString()} text={"Spots left"} />
        </div>
        <div className={"flex justify-around border-y"}>
          <Section
            subtitle={numberOfAttendants.toString()}
            text={"Attending"}
          />
          <div className={"border"} />
          <Section
            subtitle={numberOfInterested.toString()}
            text={"Interested"}
          />
        </div>
      </div>
      <div className={"flex flex-col"}>
        {anchorLinks.map((link) => (
          <a
            href={link.anchorLink}
            key={link.anchorLink}
            className={
              "text-base font-medium leading-6 h-[48px] mx-3 px-4 py-2 rounded-sm hover:bg-accent hover:text-accent-foreground inline-flex gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            }
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};
export { EventSidebar };
