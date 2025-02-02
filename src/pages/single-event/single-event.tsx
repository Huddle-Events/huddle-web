// import { useParams } from "react-router";
import EventImage from "@/assets/single-event.png";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { Image } from "@/components/image.tsx";
import { useAuth } from "@/components/context/AuthContext.tsx";
import { add, format, formatDistance, sub } from "date-fns";
import GoogleAvatar from "@/assets/google-avatar.png";
import { EventBadge } from "@/components/event-badge.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { SingleEventDetail } from "@/components/single-event/single-event-detail.tsx";
import { Calendar, Earth, MapPin, Users } from "lucide-react";
import { EventSidebar } from "@/components/event-sidebar/event-sidebar.tsx";
import { useState } from "react";
import { SingleEventTabs } from "@/components/single-event/single-event-tabs.tsx";

type EventDetailSimple = {
  imageUrl: string;
  eventTile: string;
  eventSubtitle: string;
  tags: string[];
  host: string;
  hostImageAvatarUrl: string;
  eventStartTime: string;
  eventEndTime: string;
  eventVisibility: "public" | "private";
  eventAttendanceType: "anyone" | "exclusive";
};

const simpleDetail: EventDetailSimple = {
  eventAttendanceType: "anyone",
  eventVisibility: "public",
  eventSubtitle: "Seminar at the Powerhouse, Brisbane",
  eventTile: "Annual Developers Conference",
  host: "Google",
  hostImageAvatarUrl: GoogleAvatar,
  imageUrl: EventImage,
  tags: ["Technology", "Development", "Seminar"],
  eventStartTime: add(new Date().toISOString(), { weeks: 2 }).toISOString(),
  eventEndTime: add(new Date(), {
    weeks: 2,
    hours: 3,
    minutes: 40,
  }).toISOString(),
};

const anchorLinks: { text: string; anchorLink: string }[] = [
  {
    text: "About",
    anchorLink: "#about",
  },
  {
    text: "Location",
    anchorLink: "#location",
  },
  {
    text: "Presenters",
    anchorLink: "#presenters",
  },
  {
    text: "Agenda",
    anchorLink: "#agenda",
  },
  {
    text: "Partners & Sponsors",
    anchorLink: "#partners",
  },
  {
    text: "FAQ",
    anchorLink: "#faq",
  },
];

const VisibilitySelector: Record<EventDetailSimple["eventVisibility"], string> =
  {
    private: "Private",
    public: "Public",
  };

const SingleEvent = () => {
  const [saved, setIsSaved] = useState(false);
  const { isAuthenticated } = useAuth();
  const distance = formatDistance(
    new Date(simpleDetail.eventStartTime),
    new Date(simpleDetail.eventEndTime),
    { includeSeconds: true },
  );

  return (
    <>
      <aside className="absolute top-28 left-[80%]">
        <EventSidebar
          endDate={sub(new Date(simpleDetail.eventStartTime), { days: 3 })}
          isSaved={saved}
          price={15}
          numberOfSpotLeft={6}
          numberOfAttendants={12}
          numberOfInterested={9}
          anchorLinks={anchorLinks}
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
          {isAuthenticated && (
            <SingleEventDetail
              detail={"Brisbane Showground"}
              subDetail={"600 Gregory TErrace, Bowen hill"}
              icon={MapPin}
            />
          )}
          <SingleEventDetail
            detail={"In-person event"}
            subDetail={"Anyone can attend"}
            icon={Users}
          />
        </div>
        <SingleEventTabs />
      </div>
    </>
  );
};
export { SingleEvent };
