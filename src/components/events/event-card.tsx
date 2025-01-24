import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { cn } from "@/lib/utils";
import { EventType } from "@/models/event.ts";
// import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { format } from "date-fns";
import { useNavigate } from "react-router";

interface EventCardProps {
  id: string;
  imageUrl: string;
  eventDate: string;
  eventTitle: string;
  city: string;
  state: string;
  eventType: EventType;
  isFree?: boolean;
  className?: string;
}
const EventCard: React.FC<EventCardProps> = ({
  id,
  className,
  eventDate,
  eventTitle,
  eventType,
  city,
  imageUrl,
  // isFree,
  state,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`/events/${id}`);
      }}
      className={`${cn(className)} cursor-pointer`}
    >
      <CardContent className={"p-0"}>
        {/*<AspectRatio ratio={4 / 3}>*/}
        <img className={"rounded-t-lg w-full"} src={imageUrl}></img>
        {/*</AspectRatio>*/}
      </CardContent>
      <CardHeader className={"px-4 pt-4 pb-0"}>
        <CardDescription className={"text-base text-secondary"}>
          {format(new Date(eventDate), "d MMM,h aaa")}
        </CardDescription>
        <CardTitle className={"text-lg leading-6"}>{eventTitle}</CardTitle>
        <CardDescription
          className={"text-color-text text-base font-medium"}
        >{`${city},${state}`}</CardDescription>
      </CardHeader>
      <CardFooter className={"p-4"}>
        <p className={"text-muted text-base"}>{eventType}</p>
      </CardFooter>
    </Card>
  );
};

export { EventCard };
