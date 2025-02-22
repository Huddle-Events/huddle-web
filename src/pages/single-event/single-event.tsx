import {
  getEventAuthenticated,
  getSimpleEvent,
} from "@/api/single-event-api.ts";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { Image } from "@/components/image.tsx";
import { useAuth } from "@/components/context/AuthContext.tsx";
import { EventDetailSimple } from "@/models/single-event.ts";
import { useQuery } from "@tanstack/react-query";
import { format, formatDistance } from "date-fns";
import { EventBadge } from "@/components/event-badge.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { SingleEventDetail } from "@/components/single-event/single-event-detail.tsx";
import { Calendar, Earth, MapPin, Users } from "lucide-react";
import { EventSidebar } from "@/components/event-sidebar/event-sidebar.tsx";
import { useEffect, useState } from "react";
import { SingleEventTabs } from "@/components/single-event/single-event-tabs.tsx";
import { useParams } from "react-router";

const VisibilitySelector: Record<EventDetailSimple["eventVisibility"], string> =
  {
    private: "Private",
    public: "Public",
  };

const SingleEvent = () => {
  const [saved, setIsSaved] = useState(false);
  const params = useParams<{ eventId: string }>();
  const { isAuthenticated } = useAuth();

  const { data: simpleDetail, status } = useQuery({
    queryFn: getSimpleEvent(params.eventId ?? ""),
    queryKey: ["get-simple-event"],
    enabled: params.eventId !== undefined,
  });

  useEffect(() => {
    if (status === "success") setIsSaved(simpleDetail?.isSaved ?? false);
  }, [status, simpleDetail]);

  const { data: detailedEvent } = useQuery({
    queryFn: getEventAuthenticated(params.eventId ?? ""),
    queryKey: ["get-event-authenticated"],
    enabled: params.eventId !== undefined && isAuthenticated,
  });

  if (status === "pending") {
    return <div>Loading data</div>;
  }

  if (simpleDetail === undefined) {
    return <div>Something wrong with the data</div>;
  }
  const distance = formatDistance(
    new Date(simpleDetail.eventStartTime),
    new Date(simpleDetail.eventEndTime),
    { includeSeconds: true },
  );
  return (
    <>
      <aside className="absolute top-28 left-[80%]">
        <EventSidebar
          endDate={new Date(simpleDetail.eventEndTime)}
          isSaved={saved}
          price={simpleDetail.ticketPrice}
          numberOfSpotLeft={simpleDetail.numberOfSpotLeft}
          numberOfAttendants={simpleDetail.numberOfAttendant}
          numberOfInterested={simpleDetail.numberOfInterested}
          anchorLinks={detailedEvent?.anchors ?? []}
          setIsSaved={() => setIsSaved((prev) => !prev)}
        />
      </aside>
      <div className={"flex flex-col gap-3  w-4/5"}>
        <AspectRatio ratio={21 / 9}>
          <Image
            src={simpleDetail.imageUrl}
            className={"rounded-md object-cover"}
          />
        </AspectRatio>
        <h1 className="text-4xl leading-[48px] font-semibold text-color-text">
          {simpleDetail.eventTile}
        </h1>
        <h2 className="font-inter text-xl font-normal text-color-text leading-8">
          {simpleDetail.eventSubtitle}
        </h2>
        <div className="flex gap-2">
          {simpleDetail.tags.map((tag) => (
            <EventBadge key={tag} text={tag} />
          ))}
        </div>
        <div className={"flex gap-2"}>
          <img src={simpleDetail.hostImageAvatarUrl} alt={"host-avatar"} />
          <span
            className={"self-center"}
          >{`Hosted by: ${simpleDetail.host}`}</span>
        </div>
        <Separator />
        <div className={"grid grid-cols-2 grid-rows-2 gap-2"}>
          <SingleEventDetail
            detail={format(
              new Date(simpleDetail.eventStartTime),
              "iiii d MMMM yyyy",
            )}
            subDetail={`${format(new Date(simpleDetail.eventStartTime), "h aa")} - ${format(new Date(simpleDetail.eventEndTime), "h aa")} (${distance})`}
            icon={Calendar}
          />
          <SingleEventDetail
            detail={VisibilitySelector[simpleDetail.eventVisibility]}
            subDetail={"Anyone can attend"}
            icon={Earth}
          />
          {isAuthenticated && detailedEvent && (
            <SingleEventDetail
              detail={detailedEvent.location.venueName}
              subDetail={`${detailedEvent.location.address.street}, ${detailedEvent.location.address.suburb}, ${detailedEvent.location.address.postCode}`}
              icon={MapPin}
            />
          )}
          <SingleEventDetail
            detail={"In-person event"}
            subDetail={"Anyone can attend"}
            icon={Users}
          />
        </div>
        {detailedEvent && isAuthenticated && (
          <SingleEventTabs detailedEvent={detailedEvent} />
        )}
      </div>
    </>
  );
};
export { SingleEvent };
